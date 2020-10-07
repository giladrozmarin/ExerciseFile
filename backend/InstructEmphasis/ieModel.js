const DB = require('../db');
const dal = require('./ieDAL');

function MeansOfExercise(req, res) {
    //{unit: "Artillery battery A", gun: 1, M548: 2, Track: 3, M113: 4,BMP-1: 5, Rocket: 6,Artilley: 7 ,light vehicle: 8}

    let facts = {
        [DB.MOE.UNIT]: req.body.unit,
        [DB.MOE.GUN]: req.body.gun,
        [DB.MOE.M548]: req.body.M548,
        [DB.MOE.TRACK]: req.body.Track,
        [DB.MOE.M113]: req.body.M113,
        [DB.MOE.BMP_1]: req.body.BMP_1,
        [DB.MOE.ROCKET]: req.body.Rocket,
        [DB.MOE.ARTILLERY]: req.body.Artilley,
        [DB.MOE.LIGHT_VEHICLE]: req.body.artilleryApprove,
        [DB.MOE.TERRAIN]: req.body.terrain
    };

    dal.CheckRules(facts, function (engineRes) {
        console.log(engineRes);
        res.send(engineRes);
    });
}

module.exports = { MeansOfExercise }
