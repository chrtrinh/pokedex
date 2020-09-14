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

module.exports = router;
