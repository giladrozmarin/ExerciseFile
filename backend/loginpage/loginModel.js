const DB = require('../db');
const dal = require('./loginDAL');

function loginPage(req, res) {

    let new_file = {
        [DB.USER.FIRSTNAME]: req.body.firstname,
        [DB.USER.LASTNAME]: req.body.lastName,
        [DB.USER.RANK]: req.body.rank,
        [DB.USER.ID]: req.body.id,
        [DB.USER.DUTY]: req.body.duty,
        [DB.USER.FORCE]: req.body.force,
        [DB.USER.EMAIL]: req.body.email,
        [DB.USER.PASSWORD]: req.body.password,

       };

    dal.insertOne(new_file, function (dbRes) {
        console.log(dbRes.result.ok);
        res.send({ cerRes: 'User added successfully' });
    });
}



module.exports= {loginPage : loginPage}

