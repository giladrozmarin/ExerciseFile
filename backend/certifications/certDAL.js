const DB_PARAMS = require('../db').PARAMS;
const queries = require('../queries');
const MongoClient = require('mongodb').MongoClient;
//const ObjectId = require('mongodb').ObjectID;



function insertOne(query, callback) {
    queries.insertOne(query, DB_PARAMS.EXERCISES, callback)
}

function find(query, callback) {
    var retval;

    MongoClient.connect(DB_PARAMS.SERVER_URL, { useUnifiedTopology: true }, function (err, db) {
        if (err)
            throw err;

        let dbo = db.db(DB_PARAMS.DB);

        dbo.collection(DB_PARAMS.USERS).find(query).toArray(function (err, dbRes) {
            if (err)
                throw err;

            callback(dbRes);
            db.close();
        });
    });
}

module.exports = { insertOne: insertOne, find: find }


