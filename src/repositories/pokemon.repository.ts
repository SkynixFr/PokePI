import Pokemon, { CompletePokemon } from '../models/pokemon.interface';

//Récupération des pokémons de l'api : et les ajouter dans la base de données
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	const pokemon = await Pokemon.create(data);
	return pokemon;
};
