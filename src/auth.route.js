const { Router } = require('express');
const router = Router();
const { connection } = require('./connection.db');
const util = require('util');



// routes
router.post('/login', async (req, res) => {
    // connection()

    const db = connection({});
    const dbQuery = util.promisify(db.query).bind(db);
    const dbEnd = util.promisify(db.end).bind(db);

    const result_select_usuarios = await dbQuery('query de selct');

    if (result_select_usuarios.Error) {
        console.log(result_select_usuarios.Error);
        dbEnd();
    }

    if (result_select_usuarios.length > 0) {
        dbEnd();
    }

});



// exporting router
module.exports = router;