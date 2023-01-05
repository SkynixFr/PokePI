import { Router, Request, Response } from 'express';
import Pokemon from '../models/pokemon.interface';
import * as pokemonController from '../controllers/pokemon.controller';

const pokemonRouter = Router();

pokemonRouter.post('/', async (req: Request, res: Response) => {
	try {
		const pokemonToSave: Pokemon = req.body;
		const result = await pokemonController.create(pokemonToSave);
		return res.status(201).send(result);
	} catch (error) {
		return res.status(400).send('Bad request: ' + error);
	}
});

pokemonRouter.get('/', async (req: Request, res: Response) => {
	try {
		const results = await pokemonController.getAll();
		return res.status(200).send(results);
	} catch (error) {
		return res.status(400).send('Bad request: ' + error);
	}
});

pokemonRouter.get('/:name', async (req: Request, res: Response) => {
	const NomPokemon = String(req.params.name);
	try {
		const result = await pokemonController.getByName(NomPokemon);
		return res.status(200).send(result);
	} catch (error) {
		return res.status(404).send('Bad request: ' + error);
	}
});

pokemonRouter.put('/:name', async (req: Request, res: Response) => {
	const nomPokemon = String(req.params.name);
	const PokemonToUpdate: Pokemon = req.body;
	try {
		const result = await pokemonController.update(
			nomPokemon,
			PokemonToUpdate
		);
		return res.status(200).send(result);
	} catch (error) {
		return res.status(404).send('Bad request: ' + error);
	}
});

pokemonRouter.delete('/:name', async (req: Request, res: Response) => {
	const nomPokemon = String(req.params.name);
	try {
		const result = pokemonController.deleteByName(nomPokemon);
		return res.status(204).send({ success: result });
	} catch (error) {
		return res.status(404).send(error);
	}
});

export default pokemonRouter;
