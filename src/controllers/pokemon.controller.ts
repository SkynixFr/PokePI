import Pokemon, { CompletePokemon } from '../models/pokemon.interface';
import * as service from '../services/pokemon.service';

//Création d'un pokémon
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	return service.create(data);
};

//Récupération d'un pokémon
export const getByName = async (nom: string): Promise<CompletePokemon> => {
	try {
		return service.getByName(nom);
	} catch (error) {
		throw error;
	}
};
