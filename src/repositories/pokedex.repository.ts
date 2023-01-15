import Pokedex, { CompletePokedex } from '../models/pokedex.interface';

//Création d'un pokédex d'un client
export const create = async (data: Pokedex): Promise<CompletePokedex> => {
	const pokedex = await Pokedex.create(data);
	return pokedex;
};

//Récupération d'un pokédex d'un client
export const getByMailClient = async (
	mail: string
): Promise<CompletePokedex> => {
	const pokedex = await Pokedex.findByPk(mail);

	if (!pokedex) {
		throw new Error('Pokedex not found');
	}

	return pokedex;
};
