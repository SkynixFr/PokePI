import Client from '../models/client.interface';
import Pokemon from '../models/pokedex.interface';

//Création des tables Client et Pokemon
const dbInit = () => {
	Client.sync();
	Pokemon.sync();
};

export default dbInit;
