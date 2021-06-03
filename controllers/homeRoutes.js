const bodyParser = require('body-parser');
const router = require('express').Router();
router.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });




router.get('/', (req, res) => {
    if (!req.session.logged_in) {
        res.render('homepage');
    } else {
        res.redirect('/dashboard')
    }
    return;
});
var exphbs = require('express-handlebars');



  
router.get('/home', (req, res) => {
    res.render('home', { msg: 'Handlebars are Cool!' });
  })
//   let reviews = [
//     { title: "Great Review", movieTitle: "Batman II" },
//     { title: "Awesome Movie", movieTitle: "Titanic" }
//   ]
router.get('/reviews', (req, res) => {
    Review.find()
      .then(reviews => {
        res.render('reviews-index', { reviews: reviews });
      })
      .catch(err => {
        console.log(err);
      })
  })
  router.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
  })
  // INDEX
// INITIALIZE BODY-PARSER AND ADD IT TO APP



// The following line must appear AFTER const app = express() and before your routes!



// CREATE
router.post('/reviews', (req, res) => {
  console.log(req.body);
  // res.render('reviews-new', {});
})

const Review = mongoose.model('Review', {
    title: String,
    description: String,
    movieTitle: String
  });


router.post('/reviews', (req, res) => {
    Review.create(req.body).then((review) => {
      console.log(review);
      res.redirect('/reviews');
    }).catch((err) => {
      console.log(err.message);
    })
  })
  

  





  
module.exports = router;
