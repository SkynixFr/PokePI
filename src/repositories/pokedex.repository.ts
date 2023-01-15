import Pokedex, { CompletePokedex } from '../models/pokedex.interface';

//Rentrée d'un pokémon dans le pokédex d'un client
export const create = async (data: Pokedex): Promise<CompletePokedex> => {
	const pokemon = await Pokedex.create(data);
	return pokemon;
};