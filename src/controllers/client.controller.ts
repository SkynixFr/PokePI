import Client, { CompleteClient } from '../models/client.interface';
import * as service from '../services/client.service';

//Appel de la fonction de création d'un utilisateur
export const create = async (data: Client): Promise<CompleteClient> => {
	return service.create(data);
};

//Appel de la fonction de suppression d'un utilisateur par son id
export const deleteById = async (id: number): Promise<boolean> => {
	try {
		return service.deleteById(id);
	} catch (error) {
		throw error;
	}
};
