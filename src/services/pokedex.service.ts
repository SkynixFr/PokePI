import * as repository from '../repositories/pokedex.repository';

//Création d'un pokédex d'un client
export const create = async (data: any): Promise<any> => {
	return repository.create(data);
};

//Récupération d'un pokémon d'un pokédex d'un client
export const getByPokemon = async (data: any): Promise<any> => {
	return repository.getByPokemon(data);
};

//Vérification d'un enregistrement de pokémon d'un pokédex d'un client s'il existe
export const checkPokemoninPokedexExist = async (data: any) => {
	try {
		await repository.getByPokemon(data);
		return true;
	} catch (error) {
		return false;
	}
};

//Suppression d'un enregistrement de pokémon d'un pokédex d'un client
export const deleteByPokemon = async (data: any): Promise<boolean> => {
	return repository.deleteByPokemon(data);
};
