const router = require('express').Router();
const { User, Movie, Category } = require('../models');
const path = require('path');
const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/', async (req, res) => {
    res.render('results');
});

module.exports = router;