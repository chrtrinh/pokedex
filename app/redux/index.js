import { combineReducers } from 'redux';
import pokemonReducer from './pokedex';

const appReducer = combineReducers({
	pokemons: pokemonReducer,
});

export default appReducer;
