import Pokemon, { CompletePokemon } from '../models/pokemon.interface';

//Récupération d'un pokémon de l'api et l'ajouter dans la base de données
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	const pokemon = await Pokemon.create(data);
	return pokemon;
};

export const getByName = async (nom: string): Promise<CompletePokemon> => {
	const pokemon = await Pokemon.findByPk(nom);

	if (!pokemon) {
		throw new Error('Pokemon not found');
	}
	return pokemon;
};
