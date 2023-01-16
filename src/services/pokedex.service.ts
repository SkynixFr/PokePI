import Pokedex from '../models/pokedex.interface';
import * as repository from '../repositories/pokedex.repository';

//Création d'un pokédex d'un client
export const create = async (data: any): Promise<any> => {
	return repository.create(data);
};

export const checkPokemoninPokedexExist = async (data: any) => {
	try {
		await repository.getByPokemon(data);
		return true;
	} catch (error) {
		return false;
	}
};
