import Pokemon, {
	BasePokemon,
	CompletePokemon
} from '../models/pokemon.interface';
import { Op } from 'sequelize';

//création d'un pokémon dans la BD
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	const pokemon = await Pokemon.create(data);
	if (!pokemon) {
		throw new Error('Something missing');
	}
	return pokemon;
};

//Avoir tous les pokémons
export const getAll = async (): Promise<Pokemon[]> => {
	return await Pokemon.findAll();
};

//avoir un pokémon par le nom
export const getByName = async (nom: string): Promise<Pokemon> => {
	const pokemon = await Pokemon.findOne({
		where: { nomPokemon: nom }
	});
	if (!pokemon) {
		throw new Error('pokemon Not Found');
	}
	return pokemon;
};

//avoir une liste de pokémon en fonction d'un type
export const getByType = async (type: string): Promise<Pokemon[]> => {
	const pokemons = await Pokemon.findAll({
		//avec attributes on va récupérer que les nons des pokémons que l'on veut
		//comme un select nomPokemon from ...
		attributes: ['nomPokemon'],
		where: {
			//Op.or pour avoir l'opérande OR = ou en fr
			[Op.or]: [{ type1: type }, { type2: type }]
		}
	});

	if (!pokemons) {
		throw new Error('pokemons Not Found');
	}
	return pokemons;
};

//updates les infos d'un pokémon précis
export const update = async (
	nom: string,
	data: BasePokemon
): Promise<Pokemon> => {
	const pokemon = await Pokemon.findOne({
		where: { nomPokemon: nom }
	});
	if (!pokemon) {
		throw new Error('pokemon Not Found');
	}
	const updatedPokemon = await (pokemon as Pokemon).update(data);

	return updatedPokemon;
};

//delete un pokémon par son nom
export const deleteByName = async (nom: string): Promise<boolean> => {
	const deletedPokemon = await Pokemon.destroy({
		where: { nomPokemon: nom }
	});
	if (!deletedPokemon) {
		throw new Error('Not found');
	}
	return !!deletedPokemon;
};
