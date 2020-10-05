    const DB = require('../db');
    const dal = require('./soFormDAL');



    function safetyManagerlist(req, res) {

        let rank = req.query.rank;
        let force = req.query.force;

        dal.find({ rank, force }, function (dbRes) {
            console.log(dbRes);
            res.send({ safetyManagerlist: dbRes, cerRes: 'file approve options fetched successfully' });
        });
    }

    module.exports= { safetyManagerlist : safetyManagerlist}
