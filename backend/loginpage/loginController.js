
const express = require('express'); 
const router = express.Router(); //express router 
const loginModel = require('./loginModel');
const axios = require('axios')

router.post('/', loginModel.loginPage);//POST is used to send data to a server to create/update a resource.



module.exports = router;
