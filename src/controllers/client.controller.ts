import Client, { CompleteClient, BaseClient } from '../models/client.interface';
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

//Récupération de tous les pokémons d'un pokédex d'un client
export const getPokemonsInPokedex = async (mail: string): Promise<Client> => {
	try {
		return service.getPokemonsInPokedex(mail);
	} catch (error) {
		throw error;
	}
};

//Récupération d'un pokémon d'un pokédex d'un client
export const getPokemonInPokedex = async (data: any): Promise<Client> => {
	try {
		return service.getPokemonInPokedex(data);
	} catch (error) {
		throw error;
	}
};

//Modification d'un client
export const updateUsername = async (
	mailClient: string,
	username: string
): Promise<Client> => {
	try {
		return service.updateUsername(mailClient, username);
	} catch (error) {
		throw error;
	}
};

//Modification d'un client
export const updatePassword = async (
	mailClient: string,
	mdpClient: string
): Promise<Client> => {
	try {
		return service.updatePassword(mailClient, mdpClient);
	} catch (error) {
		throw error;
	}
};
