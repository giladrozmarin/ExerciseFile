const DB = require('../db');
const dal = require('./certDAL');

function certifications(req, res) {

    let new_file = {
        [DB.PARAMS.EXERCISEBY]: req.body.exerciseBy,
        [DB.PARAMS.EXERCISENAME]: req.body.exerciseName,
        [DB.PARAMS.EXERCISEOOB]: req.body.exerciseOOB,
        [DB.PARAMS.EXERCISEPOD]: req.body.exercisePOD,
        [DB.PARAMS.EXERCISETYPE]: req.body.exerciseType,
        [DB.PARAMS.EXERCISELIVE]: req.body.exerciseLive[0] ? req.body.exerciseLive[0] : 'off',
        [DB.PARAMS.FIELDAPPROVE]: req.body.fieldApprove,
        [DB.PARAMS.FILEAPPROVE]: req.body.fileApprove,
        [DB.PARAMS.ARTILLERYAPPROVE]: req.body.artilleryApprove,
        [DB.PARAMS.EXERCISEMANAGER]: req.body.exerciseManager,
        [DB.PARAMS.TRAINEROFFICERAPPROVE]: req.body.trainerOfficerApprove
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

module.exports= {certifications : certifications, fieldApproveOptions : fieldApproveOptions}
