const Engine = require('../node_modules/json-rules-engine').Engine
const Rule = require('../node_modules/json-rules-engine').Rule
const path = require('path');
const fs = require('fs');

class RuleEngine {

    constructor() {
        if (RuleEngine.instance instanceof RuleEngine)
            return RuleEngine.instance

        this.updateRules()
        RuleEngine.instance = this
    }

    updateRules(rules) {
        console.log(rules)
        this.engine = new Engine(rules)
    }

    addRule(conditions, evt) {
        let options = { conditions: { any: [{ all: [] }] } };

        conditions.forEach(condition => {
            options.conditions.any[0].all.push(
                {
                    fact: condition.fact,
                    operator: condition.operator,
                    value: condition.value
                }
            )
        })
        options.event = {  // define the event to fire when the conditions evaluate truthy
            type: evt.type,
            params: {
                message: evt.msg
            }
        };

        let rule = new Rule(options)
        this.engine.addRule(rule)
        return rule.toJSON(false);
    }

    // Run the engine to evaluate
    checkRules(facts, callback) {
        this.engine
            .run(facts)
            .then(results => {
                let errors = []
                // 'results' is an object containing successful events, and an Almanac instance containing facts
                results.events.map(event => errors.push(event.params.message))
                callback(errors);
            }).catch(reason => console.log(reason))
    }
}

module.exports = { RuleEngine }