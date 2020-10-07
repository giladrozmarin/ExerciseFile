const Engine = require('./node_modules/json-rules-engine').Engine
const Rule = require('./node_modules/json-rules-engine').Rule
const fs = require('fs');
 



module.exports = class RuleEngine {
    

    

    
    constructor(){
        this.engine = new Engine(this.readRules());
        this.ruleCount = 0;
    }
   
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
    }

    addRule(conditions, evt){
    let options;
   conditions.foreach(condition =>{
        options.conditions.any.all.push(
            {fact: condition.fact,
              operator:  condition.fact,
              value: condition.value }
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
let count = ++this.ruleCount

newRule ={count : rule}
let jsonString = rule.toJSON()
}

// Run the engine to evaluate
 checkRules(facts, callback){
    this.engine
    .run(facts)
    .then(results => {
        errors = []
        // 'results' is an object containing successful events, and an Almanac instance containing facts
        results.events.map(event =>errors.push(event.params.message))
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
