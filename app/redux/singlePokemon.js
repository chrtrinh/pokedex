import axios from 'axios';

//Action Types
const GET_POKEMON_EVO = 'GET_POKEMON_EVO';

//Action Creators
export const gotEvolutions = (pokemon) => {
	return {
		type: GET_POKEMON_EVO,
		pokemon,
	};
};

//Thunk
export const fetchEvolutions = (speciesId) => {
	return async (dispatch) => {
		const { data: pokemon } = await axios.get(`/api/pokemon/${speciesId}`);
		dispatch(gotEvolutions(pokemon));
	};
};

const initialState = [];

export default function singlePokemonReducer(state = initialState, action) {
	switch (action.type) {
		case GET_POKEMON_EVO:
			return action.pokemon;
		default:
			return state;
	}
}
