import { Router, Request, Response } from 'express';
import Pokemon from '../models/pokemon.interface';
import * as pokedexController from '../controllers/pokedex.controller';
import * as pokedexService from '../services/pokedex.service';

const pokedexRouter = Router();

pokedexRouter.post('/pokemon', async (req: Request, res: Response) => {
	try {
		const pokemonToSave: Pokemon = req.body;

		//Test si les données ne sont pas manquantes
		//Pour les number l'erreur sera levé si le champ n'est pas existant
		if (!pokemonToSave.nomPokemon || !pokemonToSave.type1) {
			throw new Error('Something missing');
		}
		//Test si le pokémon existe
		const pokemonExist = await pokedexService.checkPokemonExist(
			pokemonToSave.nomPokemon
		);
		//Si le pokémon existe déjà on envoie une erreur
		if (pokemonExist) {
			return res.status(400).send('Pokémon already exist');
		}
		const result = await pokedexController.create(pokemonToSave);
		return res.status(201).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(400).send(message);
	}
});

////////////////////////////////////////////////////////
////////////////////////Tous les Get////////////////////
////////////////////////////////////////////////////////

pokedexRouter.get('/pokemons', async (req: Request, res: Response) => {
	try {
		const results = await pokedexController.getAll();
		return res.status(200).send(results);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

//avoir un pokémon par son nom
pokedexRouter.get('/pokemon/:name', async (req: Request, res: Response) => {
	//Il faut vérifier que le nom soit valide avec l'api
	const nomPokemon = String(req.params.name);
	try {
		const result = await pokedexController.getByName(nomPokemon);
		return res.status(200).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

pokedexRouter.get('/pokemon/type/:type', async (req: Request, res: Response) => {
	//On vérifie que le type du pokémon soit valide
	const typePokemon = String(req.params.type);

	if (typePokemon) {
	}

	try {
		const result = await pokedexController.getByType(typePokemon);
		return res.status(200).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

pokedexRouter.get(
	'/pokemon/types/:type1/:type2',
	async (req: Request, res: Response) => {
		const type1Pokemon = String(req.params.type1);
		const type2Pokemon = String(req.params.type2);
		console.log(type1Pokemon);
		console.log(type2Pokemon);

		try {
			const result = await pokedexController.getBy2Type(
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
pokedexRouter.get('/pokemon/:name/types', async (req: Request, res: Response) => {
	//Il faut vérifier que le nom soit valide avec l'api
	const nomPokemon = String(req.params.name);
	try {
		const result = await pokedexController.getByNameTypes(nomPokemon);
		return res.status(200).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});


pokedexRouter.get('/pokemon/generation/:generation', async (req: Request, res: Response) => {
	try {
		const generationPokemon = Number(req.params.generation)
		const results = await pokedexController.getAllGeneration(generationPokemon);
		return res.status(200).send(results);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

pokedexRouter.get('/pokemon/resistance/:resistance', async (req: Request, res: Response) => {
	//On vérifie que la résistance du pokémon soit valide
	const resistancePokemon = String(req.params.resistance);


	try {
		const result = await pokedexController.getByResistance(resistancePokemon);
		return res.status(200).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

pokedexRouter.get('/pokemon/resistances/:resistance1/:resistance2', async (req: Request, res: Response) => {
	//On vérifie que la résistance du pokémon soit valide
	const resistance1Pokemon = String(req.params.resistance1);
	const resistance2Pokemon = String(req.params.resistance2);



	try {
		const result = await pokedexController.getBy2Resistance(resistance1Pokemon,resistance2Pokemon);
		return res.status(200).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
pokedexRouter.put('/pokemon/:name/:namechange', async (req: Request, res: Response) => {
	const nomPokemon = String(req.params.name);
	const nomPokemonChange = String(req.params.namechange);
	const PokemonToUpdate: Pokemon = req.body;
	try {
		//Test si les données ne sont pas manquantes
		//Pour les number l'erreur sera levé si le champ n'est pas existant
		if (!PokemonToUpdate.nomPokemon || !nomPokemonChange) {
			throw new Error('Something missing');
		}
		//Test si le pokémon existe
		const pokemonExist = await pokedexService.checkPokemonExist(
			nomPokemonChange
		);
		//Si le pokémon existe déjà on envoie une erreur
		if (pokemonExist) {
			return res.status(400).send('Pokémon already exist');
		}
		const result = await pokedexController.update(
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

pokedexRouter.delete('/pokemon/:name', async (req: Request, res: Response) => {
	try {
		const nomPokemon = String(req.params.name);
		const result = await pokedexController.deleteByName(nomPokemon);
		return res.status(204).send({ success: result });
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

export default pokedexRouter;
