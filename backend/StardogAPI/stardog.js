const { Connection, query, db } = require('stardog');
const path = require('path');
const fs = require('fs');

const conn = new Connection({
    username: 'admin',
    password: 'admin',
    endpoint: 'http://localhost:5820',
});

const efdb = 'ef'
const queryOption = 'application/sparql-results+json'
const queryParams = { reasoning: true }
const queryString = 'select distinct ?s ?p ?o where { ?s ?p ?o }'


function exeQuery(callback) {
    query.execute(conn, efdb, queryString, queryOption, queryParams).then((body) => callback(body));
}
    
function createDB(callback) {
    db.create(conn, efdb, Object.assign({}, {
        index: {
            type: 'disk',
        },
    })).then((body) => {
        const schemaData = fs.readFileSync(path.join(__dirname, "ExerciseFileSchema.ttl"), "utf8");
        const insertSchema = `insert data { ${schemaData} }`;

        query.execute(conn, efdb, insertSchema).then((insertSchema) => {
            const dbData = fs.readFileSync(path.join(__dirname, "ExerciseFileDB.ttl"), "utf8");
            const insertDB = `insert data { ${dbData} }`;
            console.log(insertSchema);
            query.execute(conn, efdb, insertDB).then((insertDB) => {
                console.log(insertDB);
                callback(body)
            })
        })
    })
}

function dropDB(callback) {
    db.drop(conn, efdb, {}).then((body) => callback(body))
}

module.exports = { exeQuery, createDB, dropDB }