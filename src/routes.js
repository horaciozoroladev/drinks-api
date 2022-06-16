const { Router } = require('express');
const express = require('express');
const router = Router();
const drinksRoute = require('./drinks.route');
const authRoute = require('./auth.route');

router
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    .use('/api/bebidas', drinksRoute)
    .use('/api/auth', authRoute);

module.exports = router;