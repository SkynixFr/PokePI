import Pokedex from '../models/pokedex.interface';
import Client from '../models/client.interface';
import Pokemon from '../models/pokemon.interface';

//Création d'un pokedex d'un client
export const create = async (data: any) => {
	const client: any = await Client.findByPk(data.mailClient);
	if (!client) {
		throw new Error('Client not found');
	}

	const pokemon = await Pokemon.findByPk(data.nomPokemon);
	if (!pokemon) {
		throw new Error('Pokemon not found');
	}

	const pokedex = await client.addPokemon(pokemon, { through: Pokedex });
	return pokedex;
};

//Récupération d'un pokémon d'un pokédex d'un client
export const getByPokemon = async (data: any) => {
	const pokedex = await Pokedex.findOne({
		where: {
			nomPokemon: data.nomPokemon,
			mailClient: data.mailClient
		}
	});

	if (!pokedex) {
		throw new Error('Pokedex not found');
	}

	return pokedex;
};

//Suppression d'un enregistrement de pokémon d'un pokédex d'un client
export const deleteByPokemon = async (data: any) => {
	const deletedPokedex = await Pokedex.destroy({
		where: {
			nomPokemon: data.nomPokemon,
			mailClient: data.mailClient
		}
	});

	if (!deletedPokedex) {
		throw new Error('Pokedex not found');
	}

	return !!deletedPokedex;
};
