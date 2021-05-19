const router = require('express').Router();
const { User, Movie } = require('../models');
const withAuth = require('../utils/auth');

// this displays each user's movies
router.get('/', withAuth, (req, res) => {
	// console.log(req.session)

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
		// console.log(dataRes);
		const hbsobj = {
			movies: dataRes
		}
		// console.log(hbsobj);
		res.render('dashboard', hbsobj);
	});
});

// router.get('/:id', withAuth, async (req, res) => {

// 	try {
// 		const movieData = await Movie.findByPk(req.params.id, {
// 			attributes: ['id', 'movie', 'genre', 'unwatched', 'user_id'],
// 			include: [
// 				{
// 					model: User,
// 					attributes: ['name'],
// 				},
// 			],
// 		});
// 		console.log(id);
// 		const movie = movieData.get({ plain: true });

// 		res.redirect('back', {
// 			movie,
// 			logged_in: req.session.logged_in
// 		});
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

module.exports = router;