const { Pokemon } = require('../db');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
	try {
		const result = await Pokemon.findAll();
		res.json(result);
	} catch (error) {
		next(error);
	}
});

router.get('/:speciesId', async (req, res, next) => {
	try {
		const { speciesId } = req.params;
		const result = await Pokemon.findAll({
			where: {
				speciesId,
			},
		});
		if (result.length > 0) {
			res.json(result);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
