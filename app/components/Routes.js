import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pokedex from './Pokedex';

const Routes = () => {
	return (
		<Router>
			<main>
				<Pokedex />
			</main>
		</Router>
	);
};

export default Routes;
