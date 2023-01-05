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
export const getByName = async (NamePokemon: string): Promise<Pokemon> => {
	try {
		return repository.getByName(NamePokemon);
	} catch (e) {
		throw e as Error;
	}
};

//update a Pokemon
export const update = async (
	idPokemon: number,
	data: BasePokemon
): Promise<Pokemon> => {
	return repository.update(idPokemon, data);
};

export const deleteById = async (idPokemon: number): Promise<boolean> => {
	return repository.deleteById(idPokemon);
};
