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