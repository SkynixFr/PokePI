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

//update a Pokemon
export const update = async (
	idPokemon: number,
	data: BasePokemon
): Promise<Pokemon> => {
	try {
		return pokemonService.update(idPokemon, data);
	} catch (error) {
		throw error;
	}
};

export const deleteById = async (idPokemon: number): Promise<boolean> => {
	try {
		return pokemonService.deleteById(idPokemon);
	} catch (error) {
		throw error;
	}
};
