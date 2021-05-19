const router = require('express').Router();

router.get('/', (req, res) => {
    if (!req.session.logged_in) {
        res.render('homepage');
    } else {
        res.redirect('/dashboard')
    }
    return;
});

module.exports = router;