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
	const NamePokemon = String(req.params.name);
	try {
		const result = await pokemonController.getByName(NamePokemon);
		return res.status(200).send(result);
	} catch (error) {
		return res.status(404).send('Bad request: ' + error);
	}
});

pokemonRouter.put('/:id', async (req: Request, res: Response) => {
	const idPokemon = Number(req.params.id);
	const PokemonToUpdate: Pokemon = req.body;
	try {
		const result = await pokemonController.update(idPokemon, PokemonToUpdate);
		return res.status(200).send(result);
	} catch (error) {
		return res.status(404).send('Bad request: ' + error);
	}
});

pokemonRouter.delete('/:id', async (req: Request, res: Response) => {
	const idPokemon = Number(req.params.id);
	try {
		const result = pokemonController.deleteById(idPokemon);
		return res.status(204).send({ success: result });
	} catch (error) {
		return res.status(404).send(error);
	}
});

export default pokemonRouter;
