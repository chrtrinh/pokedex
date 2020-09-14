import React, { useState } from 'react';
import '../../public/PokemonCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import SinglePokemonCard from './SinglePokemonCard';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	media: {
		height: 225,
		width: '100%',
	},
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: 'white',
		border: '2px solid #000',
		outlineWidth: '0',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function PokemonCard(props) {
	const classes = useStyles();

	const { name, pokeId, imageUrl, types } = props.pokemon;

	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const onClick = () => {
		if (open === true) {
			setOpen(false);
		}
	};

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<SinglePokemonCard />
		</div>
	);

	return (
		<div className="pokemonCard" key={pokeId} onClick={onClick}>
			<div className="pokemonCard__content">
				<Card onClick={handleOpen}>
					<CardActionArea>
						<CardMedia
							component="img"
							className={classes.media}
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
							{types.map((type, iter) => (
								<h4 key={`${type + iter}`}>{type}</h4>
							))}
						</div>
					</CardContent>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
					>
						{body}
					</Modal>
				</Card>
			</div>
		</div>
	);
}

export default PokemonCard;
