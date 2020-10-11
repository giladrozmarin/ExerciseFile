const { Connection, query } = require('stardog');


const conn = new Connection({
    username: 'admin',
    password: 'admin',
    endpoint: 'http://localhost:5820',
});


const db = 'ef'
const queryOption = 'application/sparql-results+json'
const queryParams = { reasoning: true }
const queryString = 'select distinct ?s ?p ?o where { ?s ?p ?o }'


function exequery(callback) {
    query.execute(conn, db, queryString, queryOption, queryParams).then((body) => callback(body));

}






module.exports = { exequery }