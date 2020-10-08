const { rdfVoc, linksVoc, operatorDic } = require('./vocabulary')
const { exequery } = require('./stardog');
const observer = require('./fileObserver');
const path = require('path');
const fs = require('fs');
const RuleEngine = require('../RuleEngine/engine').RuleEngine

const Engine = new RuleEngine();

let onFileChange = () => {
    getLinks()
}

let filePath = path.join(__dirname, 'ExerciseFileDB.ttl');
observer.observeFile(filePath, onFileChange)
filePath = path.join(__dirname, 'ExerciseFileSchema.ttl');
observer.observeFile(filePath, onFileChange)

const links = []
const types = []

function getLinks() {
    exequery(
        ({ body }) => {
            let count = 0;
            let filtered = body.results.bindings.filter(trio => {
                let exp = !rdfVoc.filter((word) => trio.p.value.includes(word)).length > 0;

                trio.p.value = beautifyValue(trio.p.value, '/');
                trio.p.value = beautifyValue(trio.p.value, '#');
                trio.s.value = beautifyValue(trio.s.value, '/');
                trio.o.value = beautifyValue(trio.o.value, '/');
                trio.o.value = beautifyValue(trio.o.value, ':');

                trio.p = trio.p.value
                trio.o = trio.o.value
                trio.s = trio.s.value

                if (exp) count++;
                return exp;
            })
            filtered.map((spo) => {
                linksVoc.find((word) => word === spo.p) ? links.push(spo) :
                    (spo.p == 'type' && spo.o !== 'owl#Thing') ? types.push(spo) : null
            })
            // console.log(filtered);
            // console.log(count, types, links);

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
                        evt.msg = link.s + ' ' + operatorDic[link.p].message + ' ' + type.o;
                        // console.log(conditions);
                        rule = Engine.addRule(conditions, evt)
                        rules.push(rule);
                        conditions = []
                    }
                })
            })

            var jsonPath = path.join(__dirname, '..', '..', 'rules', 'json-rules.json');
            let jsonString = JSON.stringify(rules)
            console.log(JSON.parse(jsonString))

            fs.writeFileSync(jsonPath, jsonString, function (err) {
                if (err) {
                    console.log(err)
                }
            })
            let jsonObj = JSON.parse(fs.readFileSync(jsonPath));
            let jsonArr = Object.entries(jsonObj);
            jsonArr.map((cell, i) => jsonArr[i] = cell[1]);

            console.log(jsonArr)
            Engine.updateRules(jsonArr, jsonArr.length)

        }
    )
}
function beautifyValue(str, char) {
    return str.substring(str.lastIndexOf(char) + 1);
}

module.exports = { getLinks }
