import Client, { CompleteClient, BaseClient } from '../models/client.interface';
import * as repository from '../repositories/client.repository';

//Appel de la fonction de création d'un utilisateur
export const create = async (data: Client): Promise<CompleteClient> => {
	return repository.create(data);
};

//Suppression de l'utilisateur par son id dans la base de données
export const deleteByMail = async (mail: string): Promise<boolean> => {
	return repository.deleteByMail(mail);
};

//Récupération des données d'un client par son mail
export const getByMail = async (mail: string): Promise<Client> => {
	return repository.getByMail(mail);
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

//Vérification si le pseudo d'un utilisateur existe déjà en base de données
export const checkUsernameExist = async (
	username: string
): Promise<Boolean> => {
	try {
		await repository.getByUsername(username);
		return true;
	} catch (error) {
		return false;
	}
};

//Récupération de tous les pokémons d'un pokédex d'un client
export const getPokemonsInPokedex = async (mail: string): Promise<Client> => {
	return repository.getPokemonsInPokedex(mail);
};

//Récupération d'un pokémon d'un pokédex d'un client
export const getPokemonInPokedex = async (data: any): Promise<Client> => {
	return repository.getPokemonInPokedex(data);
};

//Modification d'un client
export const update = async (
	mailClient: string,
	data: any
): Promise<Client> => {
	return repository.update(mailClient, data);
};
