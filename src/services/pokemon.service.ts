import Pokemon, { CompletePokemon } from '../models/pokemon.interface';
import * as repository from '../repositories/pokemon.repository';

//Création d'un pokémon
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	return repository.create(data);
};

//Récupération d'un pokémon
export const getByName = async (nom: string): Promise<CompletePokemon> => {
	return repository.getByName(nom);
};

//Vérification si le pokémon existe déjà en base de données
export const checkPokemonExist = async (nom: string): Promise<boolean> => {
	try {
		await repository.getByName(nom);
		return true;
	} catch (error) {
		return false;
	}
};
