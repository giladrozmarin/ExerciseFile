const DB_PARAMS = require('../db').PARAMS;
const MongoClient = require('mongodb').MongoClient;

function find(query, callback) {
 

    MongoClient.connect(DB_PARAMS.SERVER_URL, { useUnifiedTopology: true }, function (err, db) {
        if (err)
        {
            console.log("problem  MongoClient connect")
            throw err;
        }
        let dbo = db.db(DB_PARAMS.DB);

        dbo.collection(DB_PARAMS.USERS).find(query).toArray(function (err, dbRes) {
            if (err)
            {
                console.log("problem  dbo collection")
                throw err;
            }
            callback(dbRes);
            db.close();
        });
    });
}

module.exports = {find : find}

