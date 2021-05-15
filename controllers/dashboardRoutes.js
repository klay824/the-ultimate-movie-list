// const router = require('express').Router();

// router.get('/', async (req, res) => {
//     try {
//         const movieData = await Movie.findAll({
//             where: {
//                 user_id: req.session.user_id
//             },
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
//             ]
//         })
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

var unirest = require("unirest");

var req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

req.query({
	"i": "tt4154796",
	"r": "json"
});

req.headers({
	"x-rapidapi-key": "8e8e7e65e7mshc92f00d4522ce19p1c2ce2jsn3db1c52a320a",
	"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
