var DB_PARAMS = require('./db')


function certifications(req, res) {
    MongoClient.connect(DB_PARAMS.SERVER_URL, function (err, db) {
        if (err) throw err;

        let dbo = db.db(DB_PARAMS.DB);
        let exerciseName = req.query.exerciseName;
        let exerciseType = req.query.exerciseType;
        let fieldApprove = req.query.fieldApprove;
        let fileApprove = req.query.fileApprove;
        let artilleryApprove = req.query.artilleryApprove;
        let exerciseManager = req.query.exerciseManager;
        let trainerOfficerApprove = req.query.trainerOfficerApprove;

        console.log(exerciseName);
        console.log(exerciseType);
        console.log(fieldApprove);
        console.log(fileApprove);
        console.log(artilleryApprove);
        console.log(exerciseManager);
        console.log(trainerOfficerApprove);

        let new_file = {
            [DB_PARAMS.EXERCISENAME]: exerciseName,
            [DB_PARAMS.EXERCIDETYPE]: exerciseType,
            [DB_PARAMS.FIELDAPPROVE]: fieldApprove,
            [DB_PARAMS.FILEAPPROVE]: fileApprove,
            [DB_PARAMS.ARTILLERYAPPROVE]: artilleryApprove,
            [DB_PARAMS.EXERCISEMANAGER]: exerciseManager,
            [DB_PARAMS.TRAINEROFFICERAPPROVE]: trainerOfficerApprove
        };

        res.send(JSON.stringify({ regRes: 'Registered successfully' }));

        /*
        dbo.collection(DB_PARAMS.EXERCISES).insertOne(new_file, function (err, dbRes) {
            if (err) throw err;
            console.log(dbRes.result.ok);
            res.send(JSON.stringify({ regRes: 'Registered successfully' }));
            db.close();
        });
        */
    });
}

module.exports = certifications