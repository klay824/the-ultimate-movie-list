const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));



let reviews = [
    { title: "Great Review", movieTitle: "Batman II" },
    { title: "Awesome Movie", movieTitle: "Titanic" } ]








router.get('/reviews', (req, res) => {
    res.render('reviews-index', { reviews: reviews });

    router.get('/reviews/new', (req, res) => {
        res.render('reviews-new', {});
    })
})






module.exports = router;