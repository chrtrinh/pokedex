import React from 'react';
import '../../public/Pokedex.css';
import PokemonCard from './PokemonCard';

function Pokedex() {
	return (
		<div className="pokedex">
			<div className="pokedex__container">
				<PokemonCard />
				<PokemonCard />
				<PokemonCard />
				<PokemonCard />
			</div>
		</div>
	);
}

export default Pokedex;
