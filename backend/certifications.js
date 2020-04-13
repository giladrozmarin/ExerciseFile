var DB_PARAMS = require('./db')
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID;

function certifications(req, res) {
    MongoClient.connect(DB_PARAMS.SERVER_URL, function (err, db) {
        if (err) throw err;

        let dbo = db.db(DB_PARAMS.DB);
        let exerciseAuthorId = req.query.exerciseAuthorId;
        let exerciseName = req.query.exerciseName;
        let exerciseType = req.query.exerciseType;
        let fieldApprove = req.query.fieldApprove;
        let fileApprove = req.query.fileApprove;
        let artilleryApprove = req.query.artilleryApprove;
        let exerciseManager = req.query.exerciseManager;
        let trainerOfficerApprove = req.query.trainerOfficerApprove;

        console.log(exerciseAuthorId);
        console.log(exerciseName);
        console.log(exerciseType);
        console.log(fieldApprove);
        console.log(fileApprove);
        console.log(artilleryApprove);
        console.log(exerciseManager);
        console.log(trainerOfficerApprove);

        let new_file = {
            [DB_PARAMS.EXERCISAUTHORID]: exerciseAuthorId,
            [DB_PARAMS.EXERCISENAME]: exerciseName,
            [DB_PARAMS.EXERCIDETYPE]: exerciseType,
            [DB_PARAMS.FIELDAPPROVE]: fieldApprove,
            [DB_PARAMS.FILEAPPROVE]: fileApprove,
            [DB_PARAMS.ARTILLERYAPPROVE]: artilleryApprove,
            [DB_PARAMS.EXERCISEMANAGER]: exerciseManager,
            [DB_PARAMS.TRAINEROFFICERAPPROVE]: trainerOfficerApprove
        };

        dbo.collection(DB_PARAMS.EXERCISES).insertOne(new_file, function (err, dbRes) {
            if (err) throw err;
            console.log(dbRes.result.ok);
            res.send({ cerRes: 'Certifications added successfully' });
            db.close();
        });

    });
}

function fieldApproveOptions(req, res) {
    console.log(DB_PARAMS.SERVER_URL)

    MongoClient.connect(DB_PARAMS.SERVER_URL, function (err, db) {
        if (err) throw err;

        let dbo = db.db(DB_PARAMS.DB);
        let result = [
            { firstName: 'Shimi', lastName: 'Tavori', id: '7654321', rank: 'Brigade Commander' },
            { firstName: 'Benel', lastName: 'Tavori', id: '1111111', rank: 'Brigade Commander' }
        ]
        res.send({ fieldApproveOptions: result })

        /*
        let userId = req.query.userId;

        dbo.collection(DB_PARAMS.USERS).find({ id: 'Snow' }, function (err, dbRes) {
            if (err) throw err;
            dbRes = dbRes.toArray()
            res.send({ fieldApproveOptions: dbRes})
            db.close();

            //res.send(JSON.stringify({ cerRes: 'file approve options fetched successfully' }));

        });

        dbo.collection(DB_PARAMS.USERS).findOne({ [DB_PARAMS.ID]: userId }, function (err, dbRes) {
            if (err) throw err;

            userData = dbRes
            console.log(userData)
            //res.send({ fileApproveOptions: dbRes })
            //res.send(JSON.stringify({ cerRes: 'file approve options fetched successfully' }));
            db.close();
        });
        */
    });
}
module.exports.certifications = certifications
module.exports.fieldApproveOptions = fieldApproveOptions