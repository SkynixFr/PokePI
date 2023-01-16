import { Router, Request, Response } from 'express';
import Pokedex from '../models/pokedex.interface';
import * as pokedexController from '../controllers/pokedex.controller';
import * as pokedexService from '../services/pokedex.service';
import * as pokemonService from '../services/pokemon.service';
import * as clientService from '../services/client.service';

import Cache from '../middlewares/cache';

const PokedexRouter = Router();

//Création d'un pokedex d'un client
PokedexRouter.post('/', async (req: Request, res: Response) => {
	try {
		const data = req.body;

		//Test si les données ne sont pas manquantes
		if (!data.mailClient || !data.nomPokemon) {
			throw new Error('Something missing');
		}

		//Test si le pokédex existe
		const pokedexExist = await pokedexService.checkPokemoninPokedexExist(
			data
		);
		if (pokedexExist) {
			return res.status(400).send('Pokedex already exist');
		}

		const result = await pokedexController.create(data);
		return res.status(201).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'Unknown error';
		return res.status(400).send(message);
	}
});
export default PokedexRouter;
