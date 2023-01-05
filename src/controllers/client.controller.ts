import Client, { CompleteClient } from '../models/client.interface';
import * as repository from '../repositories/client.repository';

//Appel de la fonction de création d'un utilisateur
export const create = async (data: Client): Promise<CompleteClient> => {
	return repository.create(data);
};

//Appel de la fonction de récupération d'un utilisateur par son id
export const getById = async (id: number): Promise<Client> => {
	try {
		return repository.getById(id);
	} catch (error) {
		throw error;
	}
};

//Appel de la fonction de suppression d'un utilisateur par son id
export const deleteById = async (id: number): Promise<boolean> => {
	try {
		return repository.deleteById(id);
	} catch (error) {
		throw error;
	}
};
