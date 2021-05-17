const router = require('express').Router();
const { User, Movie, Category } = require('../models');

router.get('/', async (req, res) => {
    res.render('results');
});

module.exports = router;