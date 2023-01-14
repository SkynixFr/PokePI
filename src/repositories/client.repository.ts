import Client, { CompleteClient } from '../models/client.interface';

//Création de l'utisateur dans la base de données
export const create = async (data: Client): Promise<CompleteClient> => {
	console.log(data);

	const client = await Client.create(data);
	return client;
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
