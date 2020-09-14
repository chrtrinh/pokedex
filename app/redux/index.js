import { combineReducers } from 'redux';
import pokemonReducer from './pokedex';

const appReducer = combineReducers({
	pokemon: pokemonReducer,
});

export default appReducer;
