import Client from '../models/client.interface';
import Pokemon from '../models/pokemon.interface';
import Pokedex from '../models/pokedex.interface';

//Création des tables Client et Pokemon
const dbInit = () => {
	Client.sync();
	Pokemon.sync();
	Pokedex.sync();
};

export default dbInit;
