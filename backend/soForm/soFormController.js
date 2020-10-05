const express = require('express');
const router = express.Router();
const soFormModel = require('./soFormModel');

router.get('/safetyManagerlist', soFormModel.safetyManagerlist);//GET is used to request data from a specified resource.

module.exports = router;