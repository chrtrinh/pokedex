import React from 'react';
import '../../public/PokemonCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
		width: '40%',
	},
});

function PokemonCard(props) {
	const classes = useStyles();

	const { name, pokeId, imageUrl, types } = props.pokemon;

	return (
		<div className="pokemonCard">
			<div className="pokemonCard__content">
				<Card>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							component="img"
							image={imageUrl}
							title={name}
						/>
					</CardActionArea>
					<CardContent>
						<div className="pokemonCard__footer">
							<h4>{name}</h4>
							<h4>#{pokeId}</h4>
						</div>
						<div className="pokemonCard__tags">
							{types.map((type) => (
								<h4>{type}</h4>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default PokemonCard;
