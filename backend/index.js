const express = require('express');
const app = express();
const port = 5000;

var certController = require('./certifications/certController');

//handling post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
app.use(express.static('../frontend/build'));
//
app.use('/api/certifications', certController);








app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));