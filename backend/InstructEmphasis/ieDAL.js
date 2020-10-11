const RuleEngine = require('../RuleEngine/engine').RuleEngine
const DB_PARAMS = require('../db').TYPE;
const MongoClient = require('mongodb').MongoClient;
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

function find(query, callback) {
    var retval;

    MongoClient.connect(DB_PARAMS.SERVER_URL, { useUnifiedTopology: true }, function (err, db) {
        if (err)
            throw err;

        let dbo = db.db(DB_PARAMS.DB);

        dbo.collection(DB_PARAMS.TYPE).find({$or:[{"o":"APC"},{"o":"Truck"},{"o":"Rocket"},{"o":"Artillery"},{"o":"SPG"}]}, {projection: {_id: 0,s: 1}}).toArray(function (err, dbRes) {
            if (err)
                throw err;

            callback(dbRes);
            db.close();
        });
    });
}
module.exports = { CheckRules ,find}