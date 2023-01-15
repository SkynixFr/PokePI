import Pokedex, { CompletePokedex } from '../models/pokedex.interface';
import * as service from '../services/pokedex.service';

//Création d'un pokedex
export const create = async (data: Pokedex): Promise<CompletePokedex> => {
	return service.create(data);
};

//Récupération d'un pokedex d'un client
export const getByMailClient = async (
	mail: string
): Promise<CompletePokedex> => {
	try {
		return service.getByMailClient(mail);
	} catch (error) {
		throw error;
	}
};
