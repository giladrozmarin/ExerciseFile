const { Connection, query, db } = require('stardog');
const path = require('path');

const conn = new Connection({
    username: 'admin',
    password: 'admin',
    endpoint: 'http://localhost:5820',
});

const efdb = 'ef'
const queryOption = 'application/sparql-results+json'
const queryParams = { reasoning: true }
const queryString = 'select distinct ?s ?p ?o where { ?s ?p ?o }'


<<<<<<< HEAD
function exequery(callback) {
    query.execute(conn, db, queryString, queryOption, queryParams).then((body) => callback(body));

=======
function exeQuery(callback) {
    query.execute(conn, efdb, queryString, queryOption, queryParams).then((body) => callback(body));
>>>>>>> f88ac03700d5b48803314074983edf29a31d1a47
}

function createDB(callback) {
    console.log('here');
    let options = { files: [] }
    options.files.push = { filename: path.join(__dirname, 'ExerciseFileDB.ttl') };
    options.files.push = { filename: path.join(__dirname, 'ExerciseFileSchema.ttl') };

    db.create(conn, efdb, null, options, null).then((body) => callback(body))
}

function dropDB(callback) {
    db.create(conn, efdb, null).then((body) => callback(body))
}

module.exports = { exeQuery, createDB, dropDB }