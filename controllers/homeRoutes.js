const router = require('express').Router();
const path = require('path');
const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('homepage');
});

router.get('/signup', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('homepage');
});

module.exports = router;