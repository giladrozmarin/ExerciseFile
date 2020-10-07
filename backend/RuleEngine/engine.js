const Engine = require('../node_modules/json-rules-engine').Engine
const Rule = require('../node_modules/json-rules-engine').Rule
const fs = require('fs');
<<<<<<< HEAD
 


=======
const path = require('path');
>>>>>>> 1504a4364b028d25089b91c9def740b9406db0ae

module.exports = class RuleEngine {

    constructor() {
        let rules = this.readRules()
        this.ruleCount = rules.length + 1;
        console.log(rules);
        this.engine = new Engine(rules);
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

    readRules() {
        var jsonPath = path.join(__dirname, 'json-rules.json');
        let jsonObj = JSON.parse(fs.readFileSync(jsonPath));
        let jsonArr = Object.entries(jsonObj);
        jsonArr.map((cell, i) => jsonArr[i] = cell[1]);
        return jsonArr;
>>>>>>> 1504a4364b028d25089b91c9def740b9406db0ae
    }

    addRule(conditions, evt) {
        let options;
        conditions.foreach(condition => {
            options.conditions.any.all.push(
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

            // let options = {
            //     conditions: {
            //         any: [{
            //             all: [{
            //                 fact: cond1.fact,
            //                 operator: cond1.operator,
            //                 value: cond1.value
            //             },
            //             {
            //                 fact: cond2.fact,
            //                 operator:  dic[pred].operator,
            //                 value:  dic[pred].value
            //             }]
            //         }]
            //     },
            //     event: {  // define the event to fire when the conditions evaluate truthy
            //         type: 'Urban-warfarecantuseM113',
            //         params: {
            //             message: 'Urban-warfare cant use M113'
            //         }
            //     }
        };



        let rule = new Rule(options)

        this.engine.addRule(rule)

        newRule = { [this.ruleCount++]: rule }
        var jsonPath = path.join(__dirname, 'json-rules.json');
        let jsonString = newRule.toJSON()

        fs.writeFileSync(jsonPath, jsonString, { flag: "wx" }, function (err) {
            if (err) {
                console.log(err)
            }
        })
    }

    // Run the engine to evaluate
    checkRules(facts, callback) {
        this.engine
            .run(facts)
            .then(results => {
                errors = []
                // 'results' is an object containing successful events, and an Almanac instance containing facts
                results.events.map(event => errors.push(event.params.message))
                callback(errors);
            })
    }

    // let jsonString = rule.toJSON()
    //fs.writeFile("json-rules.json", jsonString, function (err) {
    //  if (err) {
    //     console.log(err);
    //     }
    // });
}
