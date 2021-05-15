const router = require('express').Router();
const { Movie } = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.put('/:id', isAuthenticated, async (req, res) => {
    try {
        const movieData = await Movie.update(
            {
                movie: req.body.movie,
                category: req.body.category,
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                },
            }
        );

        if (!movieData) {
            res.status(404).json({ message: "No movie found with that id." });
            return;
        }

        res.status(200).json(movieData);
    } catch (err) {
        res.status(500).json(err);
    }
});