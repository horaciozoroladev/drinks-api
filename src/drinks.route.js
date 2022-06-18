const { default: axios } = require('axios');
const { Router } = require('express');
const router = Router();
const { connection } = require('./connection.db');
const { status_msg } = require('./utils');
const util = require('util');



// routes
router.get('/random', (req, res) => {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(({ data }) => {
            const drink = data.drinks[0];
            res.status(200).json(drink);
        })
        .catch(error => {
            console.log(error);
            res.send(401).json(status_msg.failed);
        });
})


router.post('/save-favorite-drink', async (req, res) => {

    const db = connection();
    const dbQuery = util.promisify(db.query).bind(db);
    const dbEnd = util.promisify(db.end).bind(db);

    const drink = req.body;

    const insert_favorite_drinks = `insert into favorite_drinks set 
    _id = uuid(),
    idDrink = "${drink.idDrink}",
    users__id = "${drink.users__id}";`;

    const result_insert_favorite_drinks = await dbQuery(insert_favorite_drinks);

    console.log(result_insert_favorite_drinks)
    if (result_insert_favorite_drinks.Error) {
        console.log(result_insert_favorite_drinks.Error);
        res.status(401).json(status_msg.failed);
        dbEnd();
    }

    if (result_insert_favorite_drinks.affectedRows > 0) {
        res.status(200).json(status_msg.ok);
        dbEnd();
    }

});


router.post('/save-done-drink', async (req, res) => {

    const db = connection();
    const dbQuery = util.promisify(db.query).bind(db);
    const dbEnd = util.promisify(db.end).bind(db);


    const drink = req.body;

    const insert_done_drinks = `insert into done_drinks set 
    _id = uuid(),
    idDrink = "${drink.idDrink}",
    users__id = "${drink.users__id}";`;

    const result_insert_done_drinks = await dbQuery(insert_done_drinks);

    console.log(result_insert_done_drinks)
    if (result_insert_done_drinks.Error) {
        console.log(result_insert_done_drinks.Error);
        res.status(401).json(status_msg.failed);
        dbEnd();
    }

    if (result_insert_done_drinks.affectedRows > 0) {
        res.status(200).json(status_msg.ok);
        dbEnd();
    }

});




// exporting router
module.exports = router;
