const express = require('express');
var path = require('path');
const router = express.Router();

var certModel = require('./certModel');

router.use('/', express.static(path.join(__dirname, '../../backend/certifications')));

router.post('/', certModel.certifications);

router.get('/fieldApproveOptions', certModel.fieldApproveOptions);

router.get('/test', (req, res) => res.sendFile(path.join(__dirname, '../../backend/certifications/test.html')));

router.get('/test/fieldApproveOptions', certModel.fieldApproveOptions);

module.exports = router;