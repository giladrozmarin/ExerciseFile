const { rdfVoc, linksVoc, operatorDic } = require('./vocabulary')
const { exequery } = require('./stardog');
const observer = require('./fileObserver');
const path = require('path');
const Engine = require('../index').Engine;

let filePath = path.join(__dirname, 'ExerciseFileDB.ttl');
observer.observeFile(filePath, onFileChange)
filePath = path.join(__dirname, 'ExerciseFileScheme.ttl');
observer.observeFile(filePath, onFileChange)

let onFileChange = () => {
    getLinks()
}

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
                    spo.p == 'type' ? types.push(spo) : null
            })
            console.log(filtered);
            console.log(count, types, links);

            let conditions = []
            links.forEach(link => {
                let mainCondition = {};
                types.forEach(type => {

                    if (type.s === link.s) {
                        mainCondition.fact = type.o;
                        mainCondition.operator = 'equal'
                        mainCondition.value = link.s;
                    }
                })
                types.forEach(type => {
                    let condition = {};
                    if (type.o === link.o) {
                        condition.fact = type.s;
                        condition.operator = operatorDic[link.p].operator
                        condition.value = operatorDic[link.p].value
                        conditions.push(mainCondition)
                        conditions.push(condition)
                        evt.message = link.s + '' + link.p + '' + type.o;
                        evt.message = link.s + ' ' + link.p + ' ' + type.o;
                        Engine.addRule(conditions, evt)
                    }
                })
            })


        }
    )
}
function beautifyValue(str, char) {
    return str.substring(str.lastIndexOf(char) + 1);
}






getLinks()



