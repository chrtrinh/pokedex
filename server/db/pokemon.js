const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('pokemon', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	pokeId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	imageUrl: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	types: {
		type: Sequelize.ARRAY(Sequelize.STRING),
	},
	weight: {
		type: Sequelize.DECIMAL,
		allowNull: false,
	},
	height: {
		type: Sequelize.DECIMAL,
		allowNull: false,
	},
});
