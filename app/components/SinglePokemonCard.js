import React from 'react';
import '../../public/SinglePokemonCard.css';

function SinglePokemonCard(props) {
	console.log(props);
	const { name, pokeId, imageUrl, types } = props.pokemon;

	return (
		<div className="singlePokemonCard">
			<div className="singlePokemonCard__image">
				<img src={imageUrl} alt="" />
			</div>
			<div className="singlePokemonCard__data">
				<h4>{name}</h4>
			</div>
		</div>
	);
}

export default SinglePokemonCard;
