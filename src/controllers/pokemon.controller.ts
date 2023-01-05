import Pokemon, {
	BasePokemon,
	CompletePokemon
} from '../models/pokemon.interface';
import * as pokemonService from '../services/pokemon.service';

//création Pokémon
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	return pokemonService.create(data);
};

//GetAll pokemon
export const getAll = async (): Promise<Pokemon[]> => {
	return pokemonService.getAll();
};

//Get Pokemon by name
export const getByName = async (nom: string): Promise<Pokemon> => {
	try {
		return pokemonService.getByName(nom);
	} catch (e) {
		throw e as Error;
	}
};

//get Pokemon by Type
export const getByType = async (type: string): Promise<Pokemon[]> => {
	try {
		return pokemonService.getByType(type);
	} catch (e) {
		throw e as Error;
	}
};

//update a Pokemon
export const update = async (
	nom: string,
	data: BasePokemon
): Promise<Pokemon> => {
	try {
		return pokemonService.update(nom, data);
	} catch (error) {
		throw error;
	}
};

export const deleteByName = async (nom: string): Promise<boolean> => {
	try {
		return pokemonService.deleteByName(nom);
	} catch (error) {
		throw error;
	}
};
