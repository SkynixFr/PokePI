import Client, { CompleteClient, BaseClient } from '../models/client.interface';
import Pokemon from '../models/pokemon.interface';

//Création de l'utisateur dans la base de données
export const create = async (data: Client): Promise<CompleteClient> => {
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
export const deleteByMail = async (mail: string): Promise<boolean> => {
	const deletedClient = await Client.destroy({
		where: { mailClient: mail }
	});

	if (!deletedClient) {
		throw new Error('Not found');
	}

	return !!deletedClient;
};

//Récupération de tous les pokémons du pokédex d'un client
export const getPokemonsInPokedex = async (mail: string): Promise<Client> => {
	const client = await Client.findByPk(mail, {
		include: Pokemon
	});

	if (!client) {
		throw new Error('Client not found');
	}

	return client;
};

//Récupération d'un pokémon d'un pokédex d'un client
export const getPokemonInPokedex = async (data: any): Promise<Client> => {
	const client = await Client.findByPk(data.mailClient, {
		include: [
			{
				model: Pokemon,
				where: {
					nomPokemon: data.nomPokemon
				}
			}
		]
	});

	if (!client) {
		throw new Error('Client not found');
	}

	return client;
};

//Modification du pseudo d'un client
export const updateUsername = async (
	mailClient: string,
	username: string
): Promise<Client> => {
	const client = await Client.findByPk(mailClient);

	if (!client) {
		throw new Error('Client not found');
	}
	client.username = username;
	client.save();

	return client;
};

//Modification du mot de passe d'un client
export const updatePassword = async (
	mailClient: string,
	mdpClient: string
): Promise<Client> => {
	const client = await Client.findByPk(mailClient);

	if (!client) {
		throw new Error('Client not found');
	}
	client.mdpClient = mdpClient;
	client.save();

	return client;
};

//Récupération de l'utilisateur par son pseudo dans la base de données
export const getByUsername = async (username: string): Promise<Client> => {
	const client = await Client.findOne({
		where: {
			username: username
		}
	});

	console.log(client);

	if (!client) {
		throw new Error('Not found');
	}

	return client;
};
