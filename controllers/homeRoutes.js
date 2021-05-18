const router = require('express').Router();

router.get('/', (req, res) => {
    if (!req.session.logged_in) {
        res.render('homepage');
    } else {
        res.redirect('/dashboard')
    }
    return;
});

// router.get('/login', async (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/dashboard');
//         return;
//     }

//     res.render('login');
// });

// router.get('/signup', async (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/dashboard');
//         return;
//     }
//     res.render('signup');
// });

module.exports = router;