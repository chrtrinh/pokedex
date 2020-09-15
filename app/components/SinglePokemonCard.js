import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../public/SinglePokemonCard.css';

function SinglePokemonCard(props) {
	const { name, pokeId, imageUrl, types } = props.pokemon;

	const [evolution, setEvolution] = useState([]);
	const [value, setValue] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const { data: initialCall } = await axios.get(
				`https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`
			);
			const evolutionsUrl = initialCall.evolution_chain.url;

			const { data: evolutions } = await axios.get(evolutionsUrl);

			let evolutionsArr = [evolutions.chain.species.url.slice(42, -1)];

			const hasEvolutions = evolutions.chain.evolves_to.length;

			if (hasEvolutions === 0) {
				setEvolution(evolutionsArr);
				setValue(false);
			} else {
				let found = false;
				let currentPosition = evolutions.chain.evolves_to;
				while (!found) {
					found = true;
					if (currentPosition.length > 1) {
						for (let i = 0; i < currentPosition.length; i++) {
							evolutionsArr.push(currentPosition[i].species.url.slice(42, -1));
						}
					} else if (currentPosition.length !== 0) {
						found = false;
						evolutionsArr.push(currentPosition[0].species.url.slice(42, -1));
						currentPosition = currentPosition[0].evolves_to;
					}
				}

				setValue(true);

				evolutionsArr = evolutionsArr.filter((item) => {
					return parseInt(item, 10) <= 151;
				});

				setEvolution(evolutionsArr);
			}
		};
		fetchData();
	}, []);

	console.log(evolution);

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
			<div className="singlePokemonCard__evolutions">
				{value ? <h4>Has Something</h4> : <h4>None</h4>}
			</div>
		</div>
	);
}

export default SinglePokemonCard;
