const express = require('express')
const app = express()
const port = 5000
var certifications = require('./certifications');

app.use(express.static('../frontend/public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/certifications', certifications)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))