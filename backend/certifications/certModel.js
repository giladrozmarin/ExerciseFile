const DB_PARAMS = require('../db');
const dal = require('./certDAL');

function certifications(req, res) {

    let new_file = {
        [DB_PARAMS.EXERCISEBY]: req.body.exerciseBy,
        [DB_PARAMS.EXERCISENAME]: req.body.exerciseName,
        [DB_PARAMS.EXERCISEOOB]: req.body.exerciseOOB,
        [DB_PARAMS.EXERCISEPOD]: req.body.exercisePOD,
        [DB_PARAMS.EXERCISETYPE]: req.body.exerciseType,
        [DB_PARAMS.EXERCISELIVE]: req.body.exerciseLive,
        [DB_PARAMS.FIELDAPPROVE]: req.body.fieldApprove,
        [DB_PARAMS.FILEAPPROVE]: req.body.fileApprove,
        [DB_PARAMS.ARTILLERYAPPROVE]: req.body.artilleryApprove,
        [DB_PARAMS.EXERCISEMANAGER]: req.body.exerciseManager,
        [DB_PARAMS.TRAINEROFFICERAPPROVE]: req.body.trainerOfficerApprove
    };

    dal.insertOne(new_file, function (dbRes) {
        console.log(dbRes.result.ok);
        res.send({ cerRes: 'Certifications added successfully' });
    });
}

function fieldApproveOptions(req, res) {

    let rank = req.query.rank;
    let force = req.query.force;

    dal.find({ rank, force }, function (dbRes) {
        console.log(dbRes);
        res.send({ fieldApproveOptions: dbRes, cerRes: 'file approve options fetched successfully' });
    });
}

module.exports.certifications = certifications;
module.exports.fieldApproveOptions = fieldApproveOptions;
