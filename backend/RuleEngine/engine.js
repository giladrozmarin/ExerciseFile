const Engine = require('./node_modules/json-rules-engine').Engine
const Rule = require('./node_modules/json-rules-engine').Rule
const fs = require('fs');

let engine;

function setup(){
 engine = new Engine();
}

// dic = { "cantuse": {operator: 'greaterThanInclusive', value: 0}}
//  [ { p: 'cantuse', s: 'Urban-warfare', o: 'APC' } ]
// { p: 'type', s: 'M-113', o: 'APC' },
// { p: 'type', s: 'BMP-1', o: 'APC' },
function addRule(cond1, cond2, pred){

let options = {
    conditions: {
        any: [{
            all: [{
                fact: cond1.fact,
                operator: cond1.operator,
                value: cond1.value
            },
            {
                fact: cond2.fact,
                operator:  dic[pred].operator,
                value:  dic[pred].value
            }]
        }]
    },
    event: {  // define the event to fire when the conditions evaluate truthy
        type: 'Urban-warfarecantuseM113',
        params: {
            message: 'Urban-warfare cant use M113'
        }
    }
};

let rule = new Rule(options)

engine.addRule(rule)
}

// Run the engine to evaluate
function checkRules(facts, callback){
engine
    .run(facts)
    .then(results => {
        errors = []
        // 'results' is an object containing successful events, and an Almanac instance containing facts
        results.events.map(event =>errors.push(event.params.message))
        callback(errors);
    })
}

let jsonString = rule.toJSON()
fs.writeFile("json-rules.json", jsonString, function (err) {
    if (err) {
        console.log(err);
    }
});

module.exports = { setup,addRule,checkRules }