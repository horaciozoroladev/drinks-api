const { Router } = require('express');
const express = require('express');
const router = Router();
const drinksRoute = require('./drinks.route');
const authRoute = require('./auth.route');
const usersRoute = require('./users.route');

router
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    .use('/api/drinks', drinksRoute)
    .use('/api/auth', authRoute)
    .use('/api/users', usersRoute);

module.exports = router;
