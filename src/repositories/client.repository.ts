import Client, { CompleteClient } from '../models/client.interface';

export const create = async (data: Client): Promise<CompleteClient> => {
	const client = await Client.create(data);

	if (!client) {
		throw new Error('Something missing');
	}

	return client;
};

// export const getClient =async (data: Client): Promise<Client> => {
// 	const client = await Client.findOne(data)

// }

export const getById = async (id: number): Promise<Client> => {
	const client = await Client.findByPk(id);

	if (!client) {
		throw new Error('Not found');
	}

	return client;
};

export const deleteById = async (id: number): Promise<boolean> => {
	const deletedClient = await Client.destroy({
		where: { idClient: id }
	});

	if (!deletedClient) {
		throw new Error('Not found');
	}

	return !!deletedClient;
};
