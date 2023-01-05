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

//Récupération de l'utilisateur par son mail dans la base de données
export const getByMail = async (mail: string): Promise<Client> => {
	const client = await Client.findOne({
		where: {
			mailClient: mail
		}
	});

	if (!client) {
		throw new Error('Not found');
	}

	return client;
};

//Suppression de l'utilisateur par son id dans la base de données
export const deleteById = async (id: number): Promise<boolean> => {
	const deletedClient = await Client.destroy({
		where: { idClient: id }
	});

	if (!deletedClient) {
		throw new Error('Not found');
	}

	return !!deletedClient;
};

export const checkMailExist = async (mail: string): Promise<Boolean> => {
	try {
		await repository.getByMail(mail);
		return true;
	} catch (error) {
		return false;
	}
};
