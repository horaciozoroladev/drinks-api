const { createConnection } = require('mysql');

function connection() {
    const database = createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'drinks_api',
        multipleStatements: true,
        supportBigNumbers: true,
        bigNumberStrings: true,
        typeCast: true
    });

    database.connect((error) => {
        if (error) {
            database.end();
            setTimeout(() => { database }, 10000);
            return null;
        }

        return database;
    });
    return database;
}

// const db = connection();
// const promiseQuery = util.promisify(db.query).bind(db);
// const promiseEnd = util.promisify(db.end).bind(db);

module.exports = { connection };