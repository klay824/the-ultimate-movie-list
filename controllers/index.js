const router = require('express').Router();

// const routes here
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api');


// router.use here
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;