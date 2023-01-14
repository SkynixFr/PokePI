import Pokemon, { CompletePokemon } from '../models/pokemon.interface';
import * as repository from '../repositories/pokemon.repository';

//Appel de la fonction de création d'un pokémon
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	return repository.create(data);
};

export const getByName = async (nom: string): Promise<CompletePokemon> => {
	return repository.getByName(nom);
};

export const checkPokemonExist = async (nom: string): Promise<boolean> => {
	try {
		await repository.getByName(nom);
		return true;
	} catch (error) {
		return false;
	}
};
