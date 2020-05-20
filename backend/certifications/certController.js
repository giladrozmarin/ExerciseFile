const express = require('express');
const path = require('path');
const router = express.Router();

var certModel = require('./certModel');

router.post('/', certModel.certifications);

router.get('/fieldApproveOptions', certModel.fieldApproveOptions);

module.exports = router;