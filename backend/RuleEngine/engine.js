const Engine = require('./node_modules/json-rules-engine').Engine
const Rule = require('./node_modules/json-rules-engine').Rule
const fs = require('fs');


/**
 * Setup a new engine
 */
let engine = new Engine();

// dic = { "cantuse": {operator: equal, value: 0}}
//  [ { p: 'cantuse', s: 'Urban-warfare', o: 'APC' } ]
// { p: 'type', s: 'M-113', o: 'APC' },
// { p: 'type', s: 'BMP-1', o: 'APC' },

let options = {
    conditions: {
        any: [{
            all: [{
                fact: 'terrain',
                operator: 'equal',
                value: 'Urban-warfare'
            },
            {
                fact: 'M113',
                operator: 'greaterThanInclusive',
                value: 0
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

let facts = {
    terrain: 'Urban-warfare',
    M113: 3
}

// Run the engine to evaluate
engine
    .run(facts)
    .then(results => {
        // 'results' is an object containing successful events, and an Almanac instance containing facts
        results.events.map(event => console.log(event.params.message))
    })

/*
 * Output:
 *
 * Player has fouled out!
 */

let jsonString = rule.toJSON()
fs.writeFile("json-rules.json", jsonString, function (err) {
    if (err) {
        console.log(err);
    }
});
