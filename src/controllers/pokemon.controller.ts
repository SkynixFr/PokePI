import Pokemon, { CompletePokemon } from '../models/pokemon.interface';
import * as service from '../services/pokemon.service';

//Appel de la fonction de création d'un pokémon
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	return service.create(data);
};

export const getByName = async (nom: string): Promise<CompletePokemon> => {
	try {
		return service.getByName(nom);
	} catch (error) {
		throw error;
	}
};
