const router = require('express').Router();
const { User, Movie } = require('../models');
const withAuth = require('../utils/auth');

// this displays each user's movies
router.get('/', withAuth, (req, res) => {
	console.log(req.session)

	Movie.findAll({
		where: {
			user_id: req.session.user_id
		},
		include: [
			{
				model: User,
				attributes: ['id'],
			},
		],
	}).then(dataRes => {
		console.log(dataRes);
		const hbsobj = {
			movies: dataRes
		}
		console.log(hbsobj);
		res.render('dashboard', hbsobj);
	});
});

router.get('/edit/:id', withAuth, async (req, res) => {
	try {
		const movieData = await Movie.findByPk(req.params.id, {
			attributes: ['id', 'movie', 'genre', 'user_id'],
			include: [
				{
					model: User,
					// attributes: ['name'],
				},
				{
					model: Category,
					attributes: ['id', 'watched', 'user_id'],
					include: {
						model: User,
						// attributes: ['name'],
					},
				},
			],
		});

		const movie = movieData.get({ plain: true });

		res.redirect('back', {
			movie,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// var unirest = require("unirest");

// var req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

// req.query({
// 	"i": "tt4154796",
// 	"r": "json"
// });

// req.headers({
// 	"x-rapidapi-key": "8e8e7e65e7mshc92f00d4522ce19p1c2ce2jsn3db1c52a320a",
// 	"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });


module.exports = router;