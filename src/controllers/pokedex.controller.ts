import Pokedex, { CompletePokedex } from '../models/pokedex.interface';
import * as service from '../services/pokedex.service';

//Appel de la fonction de création d'un pokémon
export const create = async (data: Pokedex): Promise<CompletePokedex> => {
	return service.create(data);
};