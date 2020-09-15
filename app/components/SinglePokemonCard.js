/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { fetchEvolutions } from '../redux/singlePokemon';
import '../../public/SinglePokemonCard.css';
import Stats from './Stats';
import BaseStats from './BaseStats';

class SinglePokemonCard extends React.Component {
	async componentDidMount() {
		const { speciesId } = this.props.single;
		await this.props.fetchEvolutions(speciesId);
	}

	render() {
		const { name, pokeId, imageUrl, types, height, weight } = this.props.single;
		const { evolutions } = this.props;

		return (
			<div className="singlePokemonCard">
				<div className="singlePokemonCard">
					<h4>#{pokeId}</h4>
				</div>
				<div className="singlePokemonCard__image">
					<img src={imageUrl} alt="" />
				</div>
				<div className="singlePokemonCard__data">
					<h4>{name}</h4>
				</div>
				<div className="singlePokemonCard__tags">
					{types.map((type, iter) => (
						<h4 key={`${type + iter}`}>{type}</h4>
					))}
				</div>
				<Stats stats={{ height, weight }} />
				<BaseStats pokeId={pokeId} />
				<h4>Evolutions</h4>
				<div className="singlePokemonCard__evolutionsContainer">
					{evolutions.length <= 1 ? (
						<h4>None</h4>
					) : (
						evolutions.map((evolution, iter) => {
							const { name, pokeId, imageUrl, types } = evolution;
							return (
								<div
									className="singlePokemonCard__evolutions"
									key={`${evolution + iter}`}
								>
									<img src={imageUrl} alt="pokemon evolutions" />
									<h4>{name}</h4>
								</div>
							);
						})
					)}
				</div>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		evolutions: state.singlePokemon,
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetchEvolutions: (speciesId) => dispatch(fetchEvolutions(speciesId)),
	};
};

export default connect(mapState, mapDispatch)(SinglePokemonCard);
