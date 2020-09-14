import React from 'react';
import '../../public/Pokedex.css';
import PokemonCard from './PokemonCard';
import { connect } from 'react-redux';
import { fetchPokemon } from '../redux/pokedex';

class Pokedex extends React.Component {
	componentDidMount() {
		this.props.fetchPokemon();
	}

	render() {
		let pokemons = this.props.pokemon;

		return (
			<div className="pokedex">
				<h4>Pokedex</h4>

				<div className="pokedex__container">
					{pokemons.map((pokemon) => {
						return <PokemonCard pokemon={pokemon} key={pokemon.pokeId} />;
					})}
				</div>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		pokemon: state.pokemon,
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetchPokemon: () => dispatch(fetchPokemon()),
	};
};

export default connect(mapState, mapDispatch)(Pokedex);
