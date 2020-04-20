const DB_PARAMS = require('../db');
const MongoClient = require('mongodb').MongoClient;
//const ObjectId = require('mongodb').ObjectID;

function insertOne(query, callback) {
    var retval;

    MongoClient.connect(DB_PARAMS.SERVER_URL, { useUnifiedTopology: true }, function (err, db) {
        if (err)
            throw err;

        let dbo = db.db(DB_PARAMS.DB);

        dbo.collection(DB_PARAMS.EXERCISES).insertOne(query, function (err, dbRes) {
            if (err)
                throw err;

            callback(dbRes);
            db.close();
        });
    });
}

function find(query, callback) {
    var retval;

    MongoClient.connect(DB_PARAMS.SERVER_URL, { useUnifiedTopology: true }, function (err, db) {
        if (err)
            throw err;

        let dbo = db.db(DB_PARAMS.DB);

        return dbo.collection(DB_PARAMS.USERS).find(query).toArray(function (err, dbRes) {
            if (err)
                throw err;

            callback(dbRes);
            db.close();
        });
    });

    return retval;
}

module.exports.insertOne = insertOne;
module.exports.find = find;