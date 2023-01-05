import Pokemon, {
	BasePokemon,
	CompletePokemon
} from '../models/pokemon.interface';

//création d'un pokémon dans la BD
export const create = async (data: Pokemon): Promise<CompletePokemon> => {
	const pokemon = await Pokemon.create(data);
	return pokemon;
};

//Avoir tous les pokémons
export const getAll = async (): Promise<Pokemon[]> => {
	return await Pokemon.findAll();
};

export const getByName = async (NamePokemon: string): Promise<Pokemon> => {
	const pokemon = await Pokemon.findOne({
		where: { Nom_Pokemon: NamePokemon }
	});
	if (!pokemon) {
		throw new Error('Pokemon Not Found');
	}
	return pokemon;
};

export const update = async (
	idPokemon: number,
	data: BasePokemon
): Promise<Pokemon> => {
	const pokemon = await Pokemon.findByPk(idPokemon);

	if (!pokemon) {
		throw new Error('Pokemon Not Found');
	}
	const updatedPokemon = await (pokemon as Pokemon).update(data);

	return updatedPokemon;
};

export const deleteById = async (idPokemon: number): Promise<boolean> => {
	const deletedPokemon = await Pokemon.destroy({
		where: { idPokemon }
	});

	return !!deletedPokemon;
};
