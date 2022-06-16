const { Router } = require('express');
const router = Router();
const { connection } = require('./connection.db');



// routes
router.post('/save-favorite-drinks', (req, res) => {

    const db = connection({});
    const dbQuery = util.promisify(db.query).bind(db);
    const dbEnd = util.promisify(db.end).bind(db);

});


router.post('/save-done-drinks', (req, res) => {

    const db = connection({});
    const dbQuery = util.promisify(db.query).bind(db);
    const dbEnd = util.promisify(db.end).bind(db);

});




// exporting router
module.exports = router;