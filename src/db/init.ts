import Client from '../models/client.interface';
import Pokemon from '../models/pokemon.interface';

const dbInit = () => {
	Client.sync();
	Pokemon.sync();
};

export default dbInit;
