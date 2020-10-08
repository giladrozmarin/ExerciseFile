const Engine = require('../node_modules/json-rules-engine').Engine
const Rule = require('../node_modules/json-rules-engine').Rule
<<<<<<< HEAD
const fs = require('fs');
<<<<<<< HEAD
 


=======
const path = require('path');
>>>>>>> 1504a4364b028d25089b91c9def740b9406db0ae
=======
const path = require('path');
const fs = require('fs');
>>>>>>> 435f19915188591173e0818a8cc3e03b000a1739

class RuleEngine {

    constructor() {
        if (RuleEngine.instance instanceof RuleEngine)
            return RuleEngine.instance

        this.updateRules()
        RuleEngine.instance = this
    }
<<<<<<< HEAD
   
    readRules(){
       // let jsonString =
        //JSON.parse(fs.readFileSync('${file}'));
        //return  result = Object.entries(jsonString);
      
        fs.readFile('./backend/RuleEngine/json-ruless.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            console.log('File data:', jsonString) 
        })
=======

<<<<<<< HEAD
    readRules() {
        var jsonPath = path.join(__dirname, 'json-rules.json');
        let jsonObj = JSON.parse(fs.readFileSync(jsonPath));
        let jsonArr = Object.entries(jsonObj);
        jsonArr.map((cell, i) => jsonArr[i] = cell[1]);
        return jsonArr;
>>>>>>> 1504a4364b028d25089b91c9def740b9406db0ae
=======
    updateRules(rules) {
        console.log(rules)
        this.engine = new Engine(rules)
>>>>>>> 435f19915188591173e0818a8cc3e03b000a1739
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