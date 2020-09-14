import axios from 'axios';

//Action Types
const GET_POKEMON = 'GET_POKEMON';

//Action Creators
export const gotPokemon = (pokemon) => {
	return {
		type: GET_POKEMON,
		pokemon,
	};
};

//Thunk
export const fetchPokemon = () => {
	return async (dispatch) => {
		const { data: pokemon } = await axios.get('/api/pokemon');
		dispatch(gotPokemon(pokemon));
	};
};

const initialState = [];

export default function pokemonReducer(state = initialState, action) {
	switch (action.type) {
		case GET_POKEMON:
			return action.pokemon;
		default:
			return state;
	}
}
