import { Router, Request, Response, NextFunction } from 'express';
import Pokemon from '../models/pokemon.interface';
import * as pokemonController from '../controllers/pokemon.controller';
const axios = require('axios');

const PokemonRouter = Router();

PokemonRouter.get('/', async (req: Request, res: Response) => {
	const response = await axios.get(
		'https://pokebuildapi.fr/api/v1/pokemon/limit/2'
	);

	const pokemonsPayload = response.data;

	const pokemons: Pokemon[] = pokemonsPayload.map((pokemonsPayload: any) => {
		idPokemon: pokemonsPayload.pokedexId;
		nomPokemon: pokemonsPayload.name;
	});
	console.log(pokemons);

	pokemons.forEach(async (pokemon: any) => {
		// let newPokemon = new Pokemon();
		// newPokemon.idPokemon = pokemonPayload.pokedexId;
		// newPokemon.nomPokemon = pokemonPayload.name;
		// newPokemon.type1 = pokemonPayload.apiTypes[0].name;
		// newPokemon.type2 = pokemonPayload.apiTypes[1].name;
		// newPokemon.generation = pokemonPayload.apiGeneration;
		// newPokemon.normal = pokemonPayload.apiResistances[0].damage_multiplier;
		// newPokemon.combat = pokemonPayload.apiResistances[1].damage_multiplier;
		// newPokemon.vol = pokemonPayload.apiResistances[2].damage_multiplier;
		// newPokemon.poison = pokemonPayload.apiResistances[3].damage_multiplier;
		// newPokemon.sol = pokemonPayload.apiResistances[4].damage_multiplier;
		// newPokemon.roche = pokemonPayload.apiResistances[5].damage_multiplier;
		// newPokemon.insecte = pokemonPayload.apiResistances[6].damage_multiplier;
		// newPokemon.spectre = pokemonPayload.apiResistances[7].damage_multiplier;
		// newPokemon.acier = pokemonPayload.apiResistances[8].damage_multiplier;
		// newPokemon.feu = pokemonPayload.apiResistances[9].damage_multiplier;
		// newPokemon.eau = pokemonPayload.apiResistances[10].damage_multiplier;
		// newPokemon.plante = pokemonPayload.apiResistances[11].damage_multiplier;
		// newPokemon.electrik = pokemonPayload.apiResistances[12].damage_multiplier;
		// newPokemon.psy = pokemonPayload.apiResistances[13].damage_multiplier;
		// newPokemon.glace = pokemonPayload.apiResistances[14].damage_multiplier;
		// newPokemon.dragon = pokemonPayload.apiResistances[15].damage_multiplier;
		// newPokemon.tenebre = pokemonPayload.apiResistances[16].damage_multiplier;
		// newPokemon.fee = pokemonPayload.apiResistances[17].damage_multiplier;

		try {
			console.log(pokemon);

			await pokemonController.create(pokemon);
			return res.status(201).send('Pokémon enregistré');
		} catch (error) {
			let message = error instanceof Error ? error.message : 'Unknown error';
			return res.status(400).send(message);
		}
	});
});

export default PokemonRouter;
