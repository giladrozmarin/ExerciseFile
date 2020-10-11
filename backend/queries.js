const DB_PARAMS = require('./db').PARAMS;
const MongoClient = require('mongodb').MongoClient;

function insertOne(data, collection, callback) {

    MongoClient.connect(DB_PARAMS.SERVER_URL, { useUnifiedTopology: true }, function (err, db) {
        if (err)
            throw err;

        let dbo = db.db(DB_PARAMS.DB);


        dbo.collection(collection).insertOne(data, function (err, res) {
            if (err)
                throw err;

            callback(res);
            db.close();
        });
    });
}

function insertMany(data, collection, callback) {
    MongoClient.connect(DB_PARAMS.SERVER_URL, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let dbo = db.db(DB_PARAMS.DB);

        dbo.collection(collection).insertMany(data, function (err, res) {
            if (err) throw err;
            callback(res);
            db.close();
        });
    });
}

function dropCollection(collection, callback) {

    MongoClient.connect(DB_PARAMS.SERVER_URL, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let dbo = db.db(DB_PARAMS.DB);

        dbo.listCollections().toArray(function (err, collInfos) {
            // collInfos is an array of collection info objects that look like:
            // { name: 'test', options: {} }
            collInfos.filter(coll => coll.name === collection).length > 0 ? callback(true) : callback(false);

        });
    })
    //     dbo.collection(collection).drop(function (err, delOK) {
    //         if (err) throw err;
    //         if (delOK) console.log("Collection deleted");
    //         callback();
    //         db.close();
    //     });
    // });
}

module.exports = { insertOne, insertMany, dropCollection }