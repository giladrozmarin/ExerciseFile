const express = require('express');
const router = express.Router();
const certModel = require('./certModel');

router.post('/', certModel.certifications);//POST is used to send data to a server to create/update a resource.

router.get('/fieldApproveOptions', certModel.fieldApproveOptions);//GET is used to request data from a specified resource.

module.exports = router;