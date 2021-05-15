const router = require('express').Router();

router.post('/login', passport.authenticate('local'), async (req, res) => {
    try {
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;