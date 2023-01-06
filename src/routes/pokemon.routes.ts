import { Router, Request, Response, NextFunction } from 'express';
import Pokemon from '../models/pokemon.interface';
import * as controller from '../controllers/pokemon.controller';
const axios = require('axios');

const PokemonRouter = Router();

PokemonRouter.get('/', async (req: Request, res: Response) => {
	await axios
		.get('https://pokebuildapi.fr/api/v1/pokemon')
		.then((pokemons: []) => {
			return res.json(pokemons);
		})
		.catch((error: Error) => {
			return res.status(404).send(error);
		});
});

export default PokemonRouter;
