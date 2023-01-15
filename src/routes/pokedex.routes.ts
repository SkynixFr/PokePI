import { Router, Request, Response } from 'express';
import Pokedex from '../models/pokedex.interface';
import * as pokedexController from '../controllers/pokedex.controller';
import * as pokedexService from '../services/pokedex.service';
import * as pokemonService from '../services/pokemon.service';
import * as clientService from '../services/client.service';
import Cache from '../middlewares/cache';

const PokedexRouter = Router();

PokedexRouter.post('/', async (req: Request, res: Response) => {
	try {
		const pokedexData: any = req.body;

		//Test si les données ne sont pas manquantes
		if (!pokedexData.mailClient || !pokedexData.nomPokemon) {
			throw new Error('Something missing');
		}

		//Test si le pokémon existe
		const pokemonExist = await pokemonService.checkPokemonExist(
			pokedexData.nomPokemon
		);
		if (!pokemonExist) {
			return res.status(400).send('Pokemon not found');
		}

		//Test si le pokémon existe dans le pokédex du client A FAIRE (SERVICE POKEDEX)

		const result = await pokedexController.create(pokedexData);
		return res.status(201).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'Unknown error';
		return res.status(400).send(message);
	}
});

// PokedexRouter.get('/', async (req: Request, res: Response) => {
// 	try {
// 		const pokedexData: any = req.body;
// 		console.log('🚀 ~ pokedexData', pokedexData);

// 		//Test si les données ne sont pas manquantes
// 		if (!pokedexData.mailClient) {
// 			throw new Error('Something missing');
// 		}

// 		//Test si le pokédex existe
// 		const pokedexExist = pokedexService.checkPokedexExist(
// 			pokedexData.mailClient
// 		);
// 		if (!pokedexExist) {
// 			return res.status(400).send('Pokedex not found');
// 		}

// 		const result = await pokedexController.getByMailClient(
// 			pokedexData.mailClient
// 		);
// 		return res.status(201).send(result);
// 	} catch (error) {
// 		let message = error instanceof Error ? error.message : 'Unknown error';
// 		return res.status(400).send(message);
// 	}
// });

export default PokedexRouter;
