import Pokedex, { CompletePokedex } from '../models/pokedex.interface';
import * as repository from '../repositories/pokedex.repository';

//Appel de la fonction de création d'un nouveau pokémon à entrer dans le pokédex
export const create = async (data: Pokedex): Promise<CompletePokedex> => {
	return repository.create(data);
};