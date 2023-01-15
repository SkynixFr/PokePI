// import Pokemon, { CompletePokemon } from '../models/pokemon.interface';
// import * as pokedexService from '../services/pokedex.service';

// //création Pokémon
// export const create = async (data: Pokemon): Promise<CompletePokemon> => {
// 	return pokedexService.create(data);
// };

// ////////////////////////////////////////////////////////
// ////////////////////////Tous les Get////////////////////
// ////////////////////////////////////////////////////////

// //GetAll pokemon
// export const getAll = async (): Promise<Pokemon[]> => {
// 	return pokedexService.getAll();
// };

// //Get Pokemon by name
// export const getByName = async (nom: string): Promise<Pokemon> => {
// 	try {
// 		return pokedexService.getByName(nom);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //get Pokemon by Type
// export const getByType = async (type: string): Promise<Pokemon[]> => {
// 	try {
// 		return pokedexService.getByType(type);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //get Pokemons by 2Types

// export const getBy2Type = async (
// 	type1: string,
// 	type2: string
// ): Promise<Pokemon[]> => {
// 	try {
// 		return pokedexService.getBy2Type(type1, type2);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //Get Pokemon by name
// export const getByNameTypes = async (nom: string): Promise<Pokemon> => {
// 	try {
// 		return pokedexService.getByNameTypes(nom);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //GetAll pokemon d'une génération
// export const getAllGeneration = async (gen: number): Promise<Pokemon[]> => {
// 	return pokedexService.getAllGeneration(gen);
// };

// //get Pokemon by Resistance
// export const getByResistance = async (
// 	resistance: string
// ): Promise<Pokemon[]> => {
// 	try {
// 		return pokedexService.getByResistance(resistance);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //get Pokemon by Resistance
// export const getBy2Resistance = async (
// 	resistance1: string,
// 	resistance2: string
// ): Promise<Pokemon[]> => {
// 	try {
// 		return pokedexService.getBy2Resistance(resistance1, resistance2);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //get Résistance du pokémon
// export const getByNameResistance = async (nom: string): Promise<Pokemon> => {
// 	try {
// 		return pokedexService.getByNameResistance(nom);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

// //update a Pokemon
// // export const update = async (
// // 	nom: string,
// // 	nomchange: string,
// // 	data: CompletePokemon
// // ): Promise<Pokemon> => {
// // 	try {
// // 		return pokedexService.update(nom, nomchange, data);
// // 	} catch (error) {
// // 		throw error;
// // 	}
// // };

// // export const deleteByName = async (nom: string): Promise<boolean> => {
// // 	try {
// // 		return pokedexService.deleteByName(nom);
// // 	} catch (error) {
// // 		throw error;
// // 	}
// // };
