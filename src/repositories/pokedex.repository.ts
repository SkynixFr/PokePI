// import Pokemon, { CompletePokemon } from '../models/pokemon.interface';
// import { Op } from 'sequelize';
// import sequelize from '../db/sequelize';

// //création d'un pokémon dans la BD
// export const create = async (data: Pokemon): Promise<CompletePokemon> => {
// 	const pokemon = await Pokemon.create(data);
// 	if (!pokemon) {
// 		throw new Error('Something missing');
// 	}
// 	return pokemon;
// };

// ////////////////////////////////////////////////////////
// ////////////////////////Tous les Get////////////////////
// ////////////////////////////////////////////////////////

// //Avoir tous les pokémons
// export const getAll = async (): Promise<Pokemon[]> => {
// 	return await Pokemon.findAll();
// };

// //avoir un pokémon par le nom
// export const getByName = async (nom: string): Promise<Pokemon> => {
// 	const pokemon = await Pokemon.findOne({
// 		where: { nomPokemon: nom }
// 	});
// 	if (!pokemon) {
// 		throw new Error('pokemon Not Found');
// 	}
// 	return pokemon;
// };

// //avoir une liste de pokémon en fonction d'un type
// export const getByType = async (type: string): Promise<Pokemon[]> => {
// 	const pokemons = await Pokemon.findAll({
// 		//avec attributes on va récupérer que les nons des pokémons que l'on veut
// 		//comme un select nomPokemon from ...
// 		attributes: ['nomPokemon'],
// 		where: {
// 			//Op.or pour avoir l'opérande OR = ou en fr
// 			[Op.or]: [{ type1: type }, { type2: type }]
// 		}
// 	});

// 	if (!pokemons) {
// 		throw new Error('pokemons Not Found');
// 	}
// 	return pokemons;
// };

// //avoir une liste de pokémon en fonction d'un type
// export const getBy2Type = async (
// 	type1: string,
// 	type2: string
// ): Promise<Pokemon[]> => {
// 	const pokemons = await Pokemon.findAll({
// 		//avec attributes on va récupérer que les nons des pokémons que l'on veut
// 		//comme un select nomPokemon from ...
// 		attributes: ['nomPokemon'],
// 		where: {
// 			//Op.and pour avoir l'opérande and = et en fr
// 			[Op.and]: [{ type1: type1 }, { type2: type2 }]
// 		}
// 	});

// 	if (!pokemons) {
// 		throw new Error('pokemons Not Found');
// 	}
// 	return pokemons;
// };

// //avoir une liste des types du pokémon en fonction du pokémon
// export const getByNameTypes = async (nom: string): Promise<Pokemon> => {
// 	const pokemon = await Pokemon.findOne({
// 		attributes: ['type1', 'type2'],
// 		where: { nomPokemon: nom }
// 	});
// 	if (!pokemon) {
// 		throw new Error('pokemon Not Found');
// 	}
// 	return pokemon;
// };

// //Avoir tous les pokémons d'une génération
// export const getAllGeneration = async (gen: number): Promise<Pokemon[]> => {
// 	return await Pokemon.findAll({
// 		attributes: ['nomPokemon'],
// 		where: { generation: gen }
// 	});
// };

// //avoir une liste de pokémon qui ont une résistance donné en entrée
// export const getByResistance = async (
// 	resistance: string
// ): Promise<Pokemon[]> => {
// 	const pokemons = await Pokemon.findAll({
// 		//avec attributes on va récupérer que les nons des pokémons que l'on veut
// 		//comme un select nomPokemon from ...
// 		attributes: ['nomPokemon'],
// 		where: {
// 			//Op.or pour avoir l'opérande OR = ou en fr
// 			//on fait [resistance] pour avoir la valeur du string de resistance et donc chercher
// 			//sur la valeur du string par ex "spectre" et chercher ainsi sur la colonne de la BD du nom "spectre"
// 			//[resistance] : {$eq :0.5},
// 			[Op.or]: [{ [resistance]: 0.5 }, { [resistance]: 0.25 }]
// 		}
// 	});
// 	if (!pokemons) {
// 		throw new Error('pokemons Not Found');
// 	}
// 	return pokemons;
// };

// //avoir une liste de pokémon qui ont une résistance donné en entrée
// export const getBy2Resistance = async (
// 	resistance1: string,
// 	resistance2: string
// ): Promise<Pokemon[]> => {
// 	const pokemons = await Pokemon.findAll({
// 		//avec attributes on va récupérer que les nons des pokémons que l'on veut
// 		//comme un select nomPokemon from ...
// 		attributes: ['nomPokemon'],
// 		where: {
// 			//Op.or pour avoir l'opérande OR = ou en fr
// 			//on fait [resistance] pour avoir la valeur du string de resistance et donc chercher
// 			//sur la valeur du string par ex "spectre" et chercher ainsi sur la colonne de la BD du nom "spectre"
// 			//[resistance] : {$eq :0.5},
// 			[Op.and]: [
// 				{ [Op.or]: [{ [resistance1]: 0.5 }, { [resistance1]: 0.25 }] },
// 				{ [Op.or]: [{ [resistance2]: 0.5 }, { [resistance2]: 0.25 }] }
// 			]
// 		}
// 	});
// 	if (!pokemons) {
// 		throw new Error('pokemons Not Found');
// 	}
// 	return pokemons;
// };

// //avoir une liste des résistance du pokémon en fonction du pokémon
// export const getByNameResistance = async (nom: string): Promise<Pokemon> => {
// 	const pokemon = await Pokemon.findOne({
// 		where: { nomPokemon: nom }
// 	});
// 	if (!pokemon) {
// 		throw new Error('pokemon Not Found');
// 	}

// 	return pokemon;
// };

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

// //updates les infos d'un pokémon précis avec son nom
// export const update = async (
// 	nom: string,
// 	nomchange: string,
// 	data: CompletePokemon
// ): Promise<Pokemon> => {
// 	const pokemon = await Pokemon.findOne({
// 		where: { nomPokemon: nom }
// 	});
// 	if (!pokemon) {
// 		throw new Error('pokemon Not Found');
// 	}
// 	if (nomchange == pokemon.nomPokemon) {
// 		throw new Error('Le nom du pokémon à changé est le même en entrée');
// 	}
// 	const updatedPokemon = await (pokemon as Pokemon).update(data);

// 	return updatedPokemon;
// };

// //delete un pokémon par son nom
// export const deleteByName = async (nom: string): Promise<boolean> => {
// 	const deletedPokemon = await Pokemon.destroy({
// 		where: { nomPokemon: nom }
// 	});
// 	if (!deletedPokemon) {
// 		throw new Error('Not found');
// 	}
// 	return !!deletedPokemon;
// };
