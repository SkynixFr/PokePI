import Client from '../models/client.interface';
import Pokemon from '../models/pokemon.interface';
import Pokedex from '../models/pokedex.interface';

//Ajout des associations entre la table Pokemon et Client -> Permet la création de la table Pokedexes
Client.belongsToMany(Pokemon, {
	through: Pokedex,
	foreignKey: 'mailClient'
});
Pokemon.belongsToMany(Client, {
	through: Pokedex,
	foreignKey: 'nomPokemon'
});

//Création des tables Client et Pokemon
const dbInit = async () => {
	await Client.sync();
	await Pokemon.sync();
	await Pokedex.sync();
};

export default dbInit;
