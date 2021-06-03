const router = require('express').Router();
const bodyParser = require('body-parser');
// const routes here

router.use(bodyParser.urlencoded({ extended: true }));

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