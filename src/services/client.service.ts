import Client, { CompleteClient } from '../models/client.interface';
import * as repository from '../repositories/client.repository';

export const create = async (data: Client): Promise<CompleteClient> => {
	return repository.create(data);
};

export const getById = async (id: number): Promise<Client> => {
	return repository.getById(id);
};

export const deleteById = async (id: number): Promise<boolean> => {
	return repository.deleteById(id);
};
