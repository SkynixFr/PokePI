import Pokemon, {
	BasePokemon,
	CompletePokemon
} from '../models/pokemon.interface';
import * as repository from '../repositories/pokemon.repository';

//création Pokémon
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	return repository.create(data);
};

//GetAll pokemon
export const getAll = async (): Promise<Pokemon[]> => {
	return repository.getAll();
};

//Get Pokemon by Name
export const getByName = async (nom: string): Promise<Pokemon> => {
	try {
		return repository.getByName(nom);
	} catch (e) {
		throw e as Error;
	}
};

//get Pokemon by Type
export const getByType = async (type: string): Promise<Pokemon[]> => {
	try {
		return repository.getByType(type);
	} catch (e) {
		throw e as Error;
	}
};

//update a Pokemon
export const update = async (
	nom: string,
	data: BasePokemon
): Promise<Pokemon> => {
	return repository.update(nom, data);
};

export const deleteByName = async (nom: string): Promise<boolean> => {
	return repository.deleteByName(nom);
};
