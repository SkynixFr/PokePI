import Client, { CompleteClient } from '../models/client.interface';
import * as repository from '../repositories/client.repository';

export const create = async (data: Client): Promise<CompleteClient> => {
	return repository.create(data);
};

export const getById = async (id: number): Promise<Client> => {
	try {
		return repository.getById(id);
	} catch (error) {
		throw error;
	}
};

export const deleteById = async (id: number): Promise<boolean> => {
	try {
		return repository.deleteById(id);
	} catch (error) {
		throw error;
	}
};
