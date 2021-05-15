const router = require('express').Router();

// const routes here
const homeRoutes = require('./homeRoutes');


// router.use here
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;