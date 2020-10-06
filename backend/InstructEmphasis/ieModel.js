const DB = require('../db');
const dal = require('./ieDAL');

function MeansOfExercise(req, res) {

    let facts = {
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

    dal.CheckRules(facts, function (engineRes) {
        res.send({ engineRes });
    });
}

module.exports = { MeansOfExercise }
