const express = require('express');
const app = express();
const port = 5000;

const loginController = require('./loginpage/loginController')
const certController = require('./certifications/certController');
const soFormController = require('./soForm/soFormController')
const ieController = require('./InstructEmphasis/ieController')
const RuleEngine = require('./RuleEngine/engine').RuleEngine

//RuleEngine setUp
const Engine = new RuleEngine();

//handling post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
app.use(express.static('../frontend/build'));
//middleware
app.use('/api/certifications', certController);

app.use('/api/instructEmphasis', ieController);

app.use('/api/instructEmphasis', ieController);

app.use('/api/loginPage', loginController);

app.use('/api/soForm', soFormController);

app.listen(port, () => console.log(`Exercise military app listening at http://localhost:${port}`));