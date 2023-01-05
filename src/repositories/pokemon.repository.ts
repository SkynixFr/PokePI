import Pokemon, {
	BasePokemon,
	CompletePokemon
} from '../models/pokemon.interface';

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

export const getByName = async (nom: string): Promise<Pokemon> => {
	const pokemon = await Pokemon.findOne({
		where: { nom_Pokemon: nom }
	});
	if (!pokemon) {
		throw new Error('pokemon Not Found');
	}
	return pokemon;
};
export const update = async (
	nom: string,
	data: BasePokemon
): Promise<Pokemon> => {
	const pokemon = await Pokemon.findOne({
		where: { nom_Pokemon: nom }
	});
	if (!pokemon) {
		throw new Error('pokemon Not Found');
	}
	const updatedPokemon = await (pokemon as Pokemon).update(data);

	return updatedPokemon;
};

export const deleteByName = async (nom: string): Promise<boolean> => {
	const deletedPokemon = await Pokemon.destroy({
		where: { nom_Pokemon: nom }
	});

	return !!deletedPokemon;
};
