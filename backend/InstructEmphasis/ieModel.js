const DB = require('../db');
const dal = require('./ieDAL');

function MeansOfExercise(req, res) {
    //{unit: "Artillery battery A", gun: 1, M548: 2, Track: 3, M113: 4,BMP-1: 5, Rocket: 6,Artilley: 7 ,light vehicle: 8}
    let facts = req.body
    req.body['Terrain'] = 'Urban-warfare';

    dal.CheckRules(facts, function (engineRes) {
        console.log(engineRes);
        res.send(engineRes);
    });
}

module.exports = { MeansOfExercise }
