import * as service from '../services/pokedex.service';

//Création d'un pokédex d'un client
export const create = async (data: any): Promise<any> => {
	return service.create(data);
};

//Récupération d'un pokémon d'un pokédex d'un client
export const getByPokemon = async (data: any): Promise<any> => {
	try {
		return service.getByPokemon(data);
	} catch (error) {
		throw error;
	}
};

//Suppression d'un enregistrement de pokémon d'un pokédex d'un client
export const deleteByPokemon = async (data: any): Promise<boolean> => {
	try {
		return service.deleteByPokemon(data);
	} catch (error) {
		throw error;
	}
};
