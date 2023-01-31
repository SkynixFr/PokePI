import { Router, Request, Response } from 'express';
import Pokemon from '../models/pokemon.interface';
import * as pokemonController from '../controllers/pokemon.controller';
import * as pokemonService from '../services/pokemon.service';
import Cache from '../middlewares/cache';
const axios = require('axios');

const PokemonRouter = Router();

//Récupération de tous les noms de pokémons avec l'api PokeApi
PokemonRouter.get('/', Cache, async (req: Request, res: Response) => {
	try {
		//Récupération des pokémons et retourne une erreur si la requête echoue
		const response = await axios
			.get('https://pokeapi.co/api/v2/pokemon/?limit=10000')
			.catch((error: Error) => {
				throw new Error('Pokemon missing');
			});

		//Construction d'un tableau de pokémons sur le model Pokémon à partir des données récupérer de l'api
		const pokemons: Pokemon[] = response.data.results.map(
			(pokemonPayload: any) => {
				return { nomPokemon: pokemonPayload.name };
			}
		);

		//Test si le pokémon existe
		const pokemonExist = await pokemonService.checkPokemonExist(
			pokemons[0].nomPokemon
		);

		if (pokemonExist) {
			return res.status(409).send('Pokemon already exist');
		}

		//Création 1 par 1 de pokémon à partir du tableau créé
		pokemons.forEach(async (pokemon: Pokemon) => {
			await pokemonController.create(pokemon);
		});
		return res.status(201).send('Pokemon created');
	} catch (error) {
		let message = error instanceof Error ? error.message : 'Unknown error';
		return res.status(500).send(message);
	}
});

export default PokemonRouter;
