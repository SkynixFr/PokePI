import Client, { CompleteClient } from '../models/client.interface';
import * as service from '../services/client.service';

//Appel de la fonction de création d'un utilisateur
export const create = async (data: Client): Promise<CompleteClient> => {
	return service.create(data);
};

//Appel de la fonction de suppression d'un utilisateur par son id
export const deleteByMail = async (mail: string): Promise<boolean> => {
	try {
		return service.deleteByMail(mail);
	} catch (error) {
		throw error;
	}
};

//Appel de la fonciton de récupération des données d'un client par son mail
export const getByMail = async (mail: string): Promise<Client> => {
	try {
		return service.getByMail(mail);
	} catch (error) {
		throw error;
	}
};
