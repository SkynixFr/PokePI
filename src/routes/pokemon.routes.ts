import { Router, Request, Response } from 'express';
import Pokemon from '../models/pokemon.interface';
import * as pokemonController from '../controllers/pokemon.controller';
import * as pokemonService from '../services/pokemon.service';

const pokemonRouter = Router();

pokemonRouter.post('/', async (req: Request, res: Response) => {
	try {
		const pokemonToSave: Pokemon = req.body;

		//Test si les données ne sont pas manquantes
		//Pour les number l'erreur sera levé si le champ n'est pas existant
		if (!pokemonToSave.nomPokemon || !pokemonToSave.type1) {
			throw new Error('Something missing');
		}
		//Test si le pokémon existe
		const pokemonExist = await pokemonService.checkPokemonExist(
			pokemonToSave.nomPokemon
		);
		//Si le pokémon existe déjà on envoie une erreur
		if (pokemonExist) {
			return res.status(400).send('Pokémon already exist');
		}
		const result = await pokemonController.create(pokemonToSave);
		return res.status(201).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(400).send(message);
	}
});

////////////////////////////////////////////////////////
////////////////////////Tous les Get////////////////////
////////////////////////////////////////////////////////

pokemonRouter.get('/', async (req: Request, res: Response) => {
	try {
		const results = await pokemonController.getAll();
		return res.status(200).send(results);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

//avoir un pokémon par son nom
pokemonRouter.get('/:name', async (req: Request, res: Response) => {
	//Il faut vérifier que le nom soit valide avec l'api
	const nomPokemon = String(req.params.name);
	try {
		const result = await pokemonController.getByName(nomPokemon);
		return res.status(200).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

pokemonRouter.get('/type/:type', async (req: Request, res: Response) => {
	//On vérifie que le type du pokémon soit valide
	const typePokemon = String(req.params.type);

	if (typePokemon) {
	}

	try {
		const result = await pokemonController.getByType(typePokemon);
		return res.status(200).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

pokemonRouter.get(
	'/types/:type1/:type2',
	async (req: Request, res: Response) => {
		const type1Pokemon = String(req.params.type1);
		const type2Pokemon = String(req.params.type2);
		console.log(type1Pokemon);
		console.log(type2Pokemon);

		try {
			const result = await pokemonController.getBy2Type(
				type1Pokemon,
				type2Pokemon
			);
			return res.status(200).send(result);
		} catch (error) {
			let message = error instanceof Error ? error.message : 'unknown error';
			return res.status(404).send(message);
		}
	}
);



//avoir les types d'un pokémon
pokemonRouter.get('/:name/types', async (req: Request, res: Response) => {
	//Il faut vérifier que le nom soit valide avec l'api
	const nomPokemon = String(req.params.name);
	try {
		const result = await pokemonController.getByNameTypes(nomPokemon);
		return res.status(200).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});


pokemonRouter.get('/generation/:generation', async (req: Request, res: Response) => {
	try {
		const generationPokemon = Number(req.params.generation)
		const results = await pokemonController.getAllGeneration(generationPokemon);
		return res.status(200).send(results);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});



////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
pokemonRouter.put('/:name/:namechange', async (req: Request, res: Response) => {
	const nomPokemon = String(req.params.name);
	const nomPokemonChange = String(req.params.namechange);
	const PokemonToUpdate: Pokemon = req.body;
	try {
		const result = await pokemonController.update(
			nomPokemon,
			nomPokemonChange,
			PokemonToUpdate
		);
		return res.status(200).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

pokemonRouter.delete('/:name', async (req: Request, res: Response) => {
	try {
		const nomPokemon = String(req.params.name);
		const result = await pokemonController.deleteByName(nomPokemon);
		return res.status(204).send({ success: result });
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

export default pokemonRouter;
