import Pokedex, { CompletePokedex } from '../models/pokedex.interface';
import * as repository from '../repositories/pokedex.repository';

//Création d'un nouveau pokédex
export const create = async (data: Pokedex): Promise<CompletePokedex> => {
	return repository.create(data);
};

//Récupération d'un pokédex d'un client
export const getByMailClient = async (
	mail: string
): Promise<CompletePokedex> => {
	return repository.getByMailClient(mail);
};

//Vérification si le pokédex d'un client existe
export const checkPokedexExist = async (mail: string): Promise<Boolean> => {
	try {
		await repository.getByMailClient(mail);
		return true;
	} catch (error) {
		return false;
	}
};
