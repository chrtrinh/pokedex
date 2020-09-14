const { green, red } = require('chalk');
const { db, Pokemon } = require('./server/db');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const { window } = new JSDOM();

const seed = async () => {
	try {
		const start = window.performance.now();
		await db.sync({ force: true });

		for (let i = 1; i <= 151; i++) {
			// console.log('Currently working on id: ', i);
			const { data } = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${i}/`
			);
			const { id: pokeId, name, sprites, types: typesRaw } = data;
			const imageUrl = sprites.other['official-artwork'].front_default;

			const types = [];
			typesRaw.forEach((type) => {
				const { name } = type.type;
				types.push(name);
			});

			await Pokemon.create({
				name,
				pokeId,
				imageUrl,
				types,
			});

			// View Data
			// console.log('ID: ', pokeId);
			// console.log('Name: ', name);
			// console.log('ImageUrl: ', imageUrl);
			// console.log('Types: ', types);
		}

		const end = window.performance.now();
		const execTime = end - start;
		const sec = Math.floor((execTime / 1000) % 60);
		console.log(`Database seeded from API in ${sec} seconds`);

		// seed your database here!
	} catch (err) {
		console.log(red(err));
	}
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
	seed()
		.then(() => {
			console.log(green('Seeding success!'));
			db.close();
		})
		.catch((err) => {
			console.error(red('Oh noes! Something went wrong!'));
			console.error(err);
			db.close();
		});
}
