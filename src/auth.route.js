const { Router } = require('express');
const router = Router();
const { connection } = require('./connection.db');
const util = require('util');
const { _btoa, status_msg } = require('./utils');



// routes
router.post('/login', async (req, res) => {

    const db = connection();
    const dbQuery = util.promisify(db.query).bind(db);
    const dbEnd = util.promisify(db.end).bind(db);

    const select_users = `select * from users where username = "${req.body.username}" and pass = to_base64("${req.body.pass}");`

    const result_select_users = await dbQuery(select_users);

    if (result_select_users.Error) {
        console.log(result_select_users.Error);
        dbEnd();
    }

    if (result_select_users.length > 0) {

        const token = genToken(result_select_users[0]._id, result_select_users[0].username);

        const update_users = `update users set token = "${token.token}" where _id = "${result_select_users[0]._id}"`;

        const result_update_users = await dbQuery(update_users);

        if (result_update_users.Error) {
            console.log(result_select_users.Error);
            res.status(401).json(status_msg.failed);
            dbEnd();
        }

        if (result_update_users.affectedRows > 0 && result_update_users.changedRows > 0) {
            res.status(200).json({
                _id: result_select_users[0]._id,
                username: result_select_users[0].username,
                time: token.now,
                token: token.token
            });
            dbEnd();
        }
    }

});


router.post('/logout', async (req, res) => {

    console.log(req.body)
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

        const update_users = `update users set token = "" where _id = "${result_select_users[0]._id}"`;

        const result_update_users = await dbQuery(update_users);

        console.log(result_update_users)
        if (result_update_users.Error) {
            console.log(result_select_users.Error);
            res.status(401).json(status_msg.failed);
            dbEnd();
        }

        if (result_update_users.affectedRows > 0) {
            res.status(200).json(status_msg.ok);
            dbEnd();
        }
    }

});

const genToken = (_id, username) => {
    const now = Date.now();

    const token = `${_btoa(now.toString())}.${_btoa(_id)}.${_btoa(username)}`;

    return { now, token };
}

// exporting router
module.exports = router;
