const { Router } = require('express');
const router = Router();
const { connection } = require('./connection.db');
const util = require('util');
const { _btoa, status_msg } = require('./utils');



// routes
router.post('/create', async (req, res) => {

    const db = connection();
    const dbQuery = util.promisify(db.query).bind(db);
    const dbEnd = util.promisify(db.end).bind(db);

    const user = req.body;

    const insert_users = `insert into users set _id = uuid(), givenname = "${user.givenname}", lastname = "${user.surname}", username = "${user.username}", pass = "${_btoa(user.pass)}"`;

    const result_insert_users = await dbQuery(insert_users);

    if (result_insert_users.Error) {
        console.log(result_insert_users.Error);
        dbEnd();
    }

    if (result_insert_users.affectedRows > 0) {
        res.status(200).json(status_msg.ok);
        dbEnd();
    }

});


router.post('/info', async (req, res) => {

    const db = connection();
    const dbQuery = util.promisify(db.query).bind(db);
    const dbEnd = util.promisify(db.end).bind(db);

    const select_users = `select * from users where username = "${req.body.username}" and _id = "${req.body._id}" limit 1;`

    const result_select_users = await dbQuery(select_users);

    if (result_select_users.Error) {
        console.log(result_select_users.Error);
        res.status(401).json(status_msg.failed);
        dbEnd();
    }

    if (result_select_users.length > 0) {
        res.status(200).json(result_select_users[0]);
        dbEnd();
    }

});




// exporting router
module.exports = router;
