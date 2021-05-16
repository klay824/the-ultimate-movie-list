const router = require('express').Router();

// const routes here
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const resultsRoutes = require('./resultsRoutes');


// router.use here
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/results', resultsRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;