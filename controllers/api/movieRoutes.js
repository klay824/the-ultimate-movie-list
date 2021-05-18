const router = require('express').Router();
const { Movie } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newMovie = await Movie.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newMovie);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
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

module.exports = router;