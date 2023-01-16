import Pokedex from '../models/pokedex.interface';
import * as service from '../services/pokedex.service';

//Création d'un pokédex d'un client
export const create = async (data: any): Promise<any> => {
	return service.create(data);
};
