import React from 'react';
import '../../public/PokemonCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
		width: '40%',
	},
});

function PokemonCard() {
	const classes = useStyles();

	return (
		<div className="pokemonCard">
			<div className="pokemonCard__content">
				<Card>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							component="img"
							image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
							title="Bulbasaur"
						/>
					</CardActionArea>
					<CardContent>
						<div className="pokemonCard__footer">
							<h4>Bublasaur</h4>
							<h4>#1</h4>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default PokemonCard;
