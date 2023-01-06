import Pokemon, { CompletePokemon } from '../models/pokemon.interface';
import * as service from '../services/pokemon.service';

//Appel de la fonction de création d'un utilisateur
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	return service.create(data);
};
