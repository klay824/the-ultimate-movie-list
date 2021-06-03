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
    await Movie.update({
        unwatched: req.body.status ? 1 : 0
    }, {
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        }
    });
    res.json(200);
});

module.exports = router;