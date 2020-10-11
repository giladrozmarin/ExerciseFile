const { rdfVoc, linksVoc, operatorDic } = require('./vocabulary')
const { exeQuery, createDB, dropDB } = require('./stardog');
const observer = require('./fileObserver');
const path = require('path');
const fs = require('fs');
const RuleEngine = require('../RuleEngine/engine').RuleEngine
const queries = require('../queries');

const Engine = new RuleEngine();

let onFileChange = () => {
    dropDB(function (body) {
        createDB(function (body) {
            ruleDeriving()
        })
    })
}

let filePath = path.join(__dirname, 'ExerciseFileDB.ttl');
observer.observeFile(filePath, onFileChange)
filePath = path.join(__dirname, 'ExerciseFileSchema.ttl');
observer.observeFile(filePath, onFileChange)

const links = []
const types = []

function ruleDeriving() {
    getLinks(() => {
        rules = buildRules()

        var rulesPath = path.join(__dirname, '..', '..', 'rules', 'json-rules.json');
        // write rules to file
        writeToFile(rulesPath, rules)
        typesToMongo()
        let jsonArr = readFromFile(rulesPath)
        Engine.updateRules(jsonArr, jsonArr.length)

    })
}

function getLinks(callback) {
    exeQuery(
        ({ body }) => {
            let filtered = body.results.bindings.filter(trio => {
                trio = beautifyTrio(trio);
                let exp = !rdfVoc.filter((word) => trio.p.includes(word)).length > 0;

                return exp;
            })
            filtered.map((spo) => {
                linksVoc.find((word) => word === spo.p) ? links.push(spo) :
                    (spo.p == 'type' && spo.o !== 'owl#Thing') ? types.push(spo) : null
            })

            callback();
        }
    )
}

function beautifyTrio(trio) {
    trio.p.value = beautifyValue(trio.p.value, '/');
    trio.p.value = beautifyValue(trio.p.value, '#');
    trio.s.value = beautifyValue(trio.s.value, '/');
    trio.o.value = beautifyValue(trio.o.value, '/');
    trio.o.value = beautifyValue(trio.o.value, ':');

    trio.p = trio.p.value;
    trio.o = trio.o.value;
    trio.s = trio.s.value;

    return trio;
}

function beautifyValue(str, char) {
    return str.substring(str.lastIndexOf(char) + 1);
}

function buildRules() {

    let rules = [];
    let conditions = [];
    links.forEach(link => {
        let mainCondition = {};
        types.forEach(type => {

            if (type.s === link.s) {
                // console.log(type.s, link.s);

                mainCondition.fact = type.o;
                mainCondition.operator = 'equal'
                mainCondition.value = link.s;
            }
        })
        types.forEach(type => {
            let condition = {};
            let evt = {};
            if (type.o === link.o) {
                condition.fact = type.s;
                condition.operator = operatorDic[link.p].operator
                condition.value = operatorDic[link.p].value
                conditions.push(mainCondition)
                conditions.push(condition)
                evt.type = link.s + '' + link.p + '' + type.o;
                evt.msg = link.s + ' ' + operatorDic[link.p].message + ' ' + type.s;
                // console.log(conditions);
                rule = Engine.addRule(conditions, evt)
                rules.push(rule);
                conditions = []
            }
        })
    })

    return rules;
}

function writeToFile(path, data) {
    let dataString = JSON.stringify(data)
    fs.writeFileSync(path, dataString, function (err) {
        if (err) {
            console.log(err)
        }
    })
}

function readFromFile(path) {
    let jsonObj = JSON.parse(fs.readFileSync(path));
    let jsonArr = Object.entries(jsonObj);
    jsonArr.map((cell, i) => jsonArr[i] = cell[1]);

    return jsonArr;
}

function typesToMongo() {
    console.log(types)
    queries.dropCollection('Types', function (isExist) {
        if (isExist) {
            queries.insertMany(types, 'Types', function (dbRes) {
                console.log('insert many succeeded');
            })
        } else
            console.log('collection not exist');
    })
}

module.exports = { ruleDeriving }
