import Pokemon, {
	BasePokemon,
	CompletePokemon
} from '../models/pokemon.interface';
import * as PokemonService from '../services/pokemon.service';

//création Pokémon
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	return PokemonService.create(data);
};

//GetAll pokemon
export const getAll = async (): Promise<Pokemon[]> => {
	return PokemonService.getAll();
};

//Get Pokemon by name
export const getByName = async (NamePokemon: string): Promise<Pokemon> => {
	try {
		return PokemonService.getByName(NamePokemon);
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
		return PokemonService.update(idPokemon, data);
	} catch (error) {
		throw error;
	}
};

export const deleteById = async (idPokemon: number): Promise<boolean> => {
	try {
		return PokemonService.deleteById(idPokemon);
	} catch (error) {
		throw error;
	}
};
