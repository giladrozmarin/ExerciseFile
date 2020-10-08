const RuleEngine = require('../RuleEngine/engine').RuleEngine

const Engine = new RuleEngine();

function CheckRules(facts, callback) {
    facts['light vehicle'] = '1';
    facts['Terrain'] = 'Urban-warfare';

    console.log(facts);
    Engine.checkRules(facts, function (errors) {
        let retval = { engineRes: 'success' }
        if (errors.length > 0) {
            retval = errors;
        }
        callback(retval)
    })
}

module.exports = { CheckRules }