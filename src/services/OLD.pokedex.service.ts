// import { type } from 'os';
// import Pokemon, { CompletePokemon } from '../models/pokemon.interface';
// import * as repository from '../repositories/pokedex.repository';

// //création Pokémon
// export const create = async (data: Pokemon): Promise<CompletePokemon> => {
// 	return repository.create(data);
// };

// ////////////////////////////////////////////////////////
// ////////////////////////Tous les Get////////////////////
// ////////////////////////////////////////////////////////

// //GetAll pokemon
// export const getAll = async (): Promise<Pokemon[]> => {
// 	return repository.getAll();
// };

// //Get Pokemon by Name
// export const getByName = async (nom: string): Promise<Pokemon> => {
// 	try {
// 		return repository.getByName(nom);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //get Pokemon by Type
// export const getByType = async (type: string): Promise<Pokemon[]> => {
// 	try {
// 		return repository.getByType(type);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //get Pokemons by 2 types
// export const getBy2Type = async (
// 	type1: string,
// 	type2: string
// ): Promise<Pokemon[]> => {
// 	try {
// 		return repository.getBy2Type(type1, type2);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //get les types du pokémon en paramètre
// export const getByNameTypes = async (nom: string): Promise<Pokemon> => {
// 	try {
// 		return repository.getByNameTypes(nom);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //Get tous les pokémon d'une génération
// export const getAllGeneration = async (gen: number): Promise<Pokemon[]> => {
// 	return repository.getAllGeneration(gen);
// };

// //get Pokemon by resistance
// export const getByResistance = async (
// 	resistance: string
// ): Promise<Pokemon[]> => {
// 	try {
// 		return repository.getByResistance(resistance);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //get Pokemon by 2 resistance
// export const getBy2Resistance = async (
// 	resistance1: string,
// 	resistance2: string
// ): Promise<Pokemon[]> => {
// 	try {
// 		return repository.getBy2Resistance(resistance1, resistance2);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// //Get Résistance du pokémon
// export const getByNameResistance = async (nom: string): Promise<Pokemon> => {
// 	try {
// 		return repository.getByNameResistance(nom);
// 	} catch (e) {
// 		throw e as Error;
// 	}
// };

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

// //update a Pokemon
// export const update = async (
// 	nom: string,
// 	nomchange: string,
// 	data: CompletePokemon
// ): Promise<Pokemon> => {
// 	return repository.update(nom, nomchange, data);
// };

// export const deleteByName = async (nom: string): Promise<boolean> => {
// 	return repository.deleteByName(nom);
// };

// //Vérification si le nom d'un pokémon existe déjà en base de données
// export const checkPokemonExist = async (
// 	nompokemon: string
// ): Promise<Boolean> => {
// 	try {
// 		await repository.getByName(nompokemon);
// 		return true;
// 	} catch (error) {
// 		return false;
// 	}
// };
