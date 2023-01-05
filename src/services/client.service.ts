import Client, { CompleteClient } from '../models/client.interface';
import * as repository from '../repositories/client.repository';

//Appel de la fonction de création d'un utilisateur
export const create = async (data: Client): Promise<CompleteClient> => {
	return repository.create(data);
};

//Suppression de l'utilisateur par son id dans la base de données
export const deleteById = async (id: number): Promise<boolean> => {
	return repository.deleteById(id);
};

//Vérification si le mail d'un utilisateur existe déjà en base de données
export const checkMailExist = async (mail: string): Promise<Boolean> => {
	try {
		await repository.getByMail(mail);
		return true;
	} catch (error) {
		return false;
	}
};
