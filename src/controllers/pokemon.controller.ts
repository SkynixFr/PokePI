import Pokemon, {
	BasePokemon,
	CompletePokemon
} from '../models/pokemon.interface';
import * as pokemonService from '../services/pokemon.service';

//création Pokémon
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	return pokemonService.create(data);
};

////////////////////////////////////////////////////////
////////////////////////Tous les Get////////////////////
////////////////////////////////////////////////////////

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

//get Pokemons by 2Types

export const getBy2Type = async (
	type1: string,
	type2: string
): Promise<Pokemon[]> => {
	try {
		return pokemonService.getBy2Type(type1, type2);
	} catch (e) {
		throw e as Error;
	}
};

//Get Pokemon by name
export const getByNameTypes = async (nom: string): Promise<Pokemon> => {
	try {
		return pokemonService.getByNameTypes(nom);
	} catch (e) {
		throw e as Error;
	}
};

//GetAll pokemon d'une génération
export const getAllGeneration = async (gen:number): Promise<Pokemon[]> => {
	return pokemonService.getAllGeneration(gen);
};



////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//update a Pokemon
export const update = async (
	nom: string,
	nomchange: string,
	data: BasePokemon
): Promise<Pokemon> => {
	try {
		return pokemonService.update(nom, nomchange, data);
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
