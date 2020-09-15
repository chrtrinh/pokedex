import { combineReducers } from 'redux';
import pokemonReducer from './pokedex';
import singlePokemonReducer from './singlePokemon';

const appReducer = combineReducers({
	singlePokemon: singlePokemonReducer,
	pokemon: pokemonReducer,
});

export default appReducer;
