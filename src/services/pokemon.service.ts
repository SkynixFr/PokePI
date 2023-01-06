import Pokemon, { CompletePokemon } from '../models/pokemon.interface';
import * as repository from '../repositories/pokemon.repository';

//Appel de la fonction de création d'un pokémon
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	return repository.create(data);
};
