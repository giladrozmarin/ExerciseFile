const express = require('express');
const router = express.Router();
const ieModel = require('./ieModel');

router.post('/MeansOfExercise', ieModel.MeansOfExercise);
router.post('/FireArea', ieModel.FireArea);
router.get('/MeansOfExerciseData', ieModel.MeansOfExerciseData);//GET is used to request data from a specified resource.
router.get('/fireAreasDataOpen', ieModel.fireAreasDataOpen)
router.get('/fireAreasDataUrban', ieModel.fireAreasDataUrban)



module.exports = router;