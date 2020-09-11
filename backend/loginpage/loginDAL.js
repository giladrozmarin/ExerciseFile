const DB_PARAMS = require('../db').USER;
const MongoClient = require('mongodb').MongoClient;




function insertOne(query, callback) {
    var retval;

    MongoClient.connect(DB_PARAMS.SERVER_URL, { useUnifiedTopology: true }, function (err, db) {
        if (err)
            throw err;

        let dbo = db.db(DB_PARAMS.DB);

        dbo.collection(DB_PARAMS.USERS).insertOne(query, function (err, dbRes) {
            if (err)
                throw err;

            callback(dbRes);
            db.close();
        });
    });
}

module.exports = {insertOne : insertOne}

