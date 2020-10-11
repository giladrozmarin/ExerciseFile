const RuleEngine = require('../RuleEngine/engine').RuleEngine

const Engine = new RuleEngine();

function CheckRules(facts, callback) {
    Engine.checkRules(facts, function (errors) {
        let retval = { engineRes: 'success' }
        if (errors.length > 0) {
            retval = errors;
        }
        callback(retval)
    })
}

module.exports = { CheckRules }