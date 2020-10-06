const express = require('express');
const router = express.Router();
const ieModel = require('./ieModel');

router.post('/MeansOfExercise', ieModel.MeansOfExercise);//GET is used to request data from a specified resource.

module.exports = router;