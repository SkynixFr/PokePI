import { Router, Request, Response, NextFunction } from 'express';
import Client from '../models/client.interface';
import * as clientController from '../controllers/client.controller';
import * as clientService from '../services/client.service';
import * as pokedexService from '../services/pokedex.service';
import VerifyToken from '../middlewares/authToken';
import Cache from '../middlewares/cache';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const clientsRouter = Router();

//Création du client
clientsRouter.post('/register', async (req: Request, res: Response) => {
	try {
		const clientData: Client = req.body;

		//Test si les données ne sont pas manquantes
		if (
			!clientData.mailClient ||
			!clientData.mdpClient ||
			!clientData.username
		) {
			throw new Error('Something missing');
		}

		//Test si l'utilisateur existe
		const clientExist = await clientService.checkMailExist(
			clientData.mailClient
		);

		if (clientExist) {
			return res.status(400).send('User already exist');
		}

		//Test si le mot de passe suit un bon pattern (1 majuscule, 1 minuscule, 1 caractère spécial, 8 caractères minimum)
		const mdpRegex = new RegExp(
			'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'
		);

		if (!mdpRegex.test(clientData.mdpClient)) {
			throw new Error('Wrong password');
		}

		//Récupération du mot de passe pour le crypter
		clientData.mdpClient = await bcrypt.hash(clientData.mdpClient, 10);

		const result = await clientController.create(clientData);
		return res.status(201).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'Unknown error';
		return res.status(400).send(message);
	}
});

//Connexion du client
clientsRouter.post('/login', async (req: Request, res: Response) => {
	try {
		const clientData: Client = req.body;

		//Test si les données ne sont pas manquantes
		if (!clientData.mailClient || !clientData.mdpClient) {
			throw new Error('Something missing');
		}

		//Test si l'utilisateur existe
		const clientExist = await clientService.checkMailExist(
			clientData.mailClient
		);

		if (!clientExist) {
			return res.status(400).send('User not found');
		}

		//Récupération des données du client en base de données
		try {
			const clientDataBdd = await clientService.getByMail(
				clientData.mailClient
			);

			//Test si le mot de passe est correct
			const valideMdp = await bcrypt.compare(
				clientData.mdpClient,
				clientDataBdd.mdpClient
			);

			if (!valideMdp) {
				return res.status(400).send('Wrong user data');
			}

			clientData.mdpClient = clientDataBdd.mdpClient;
		} catch (error) {
			let message = error instanceof Error ? error.message : 'Unknown error';
			return res.status(404).send(message);
		}

		//Créé et assigne un token à l'utilisateur
		const token = jwt.sign(clientData, process.env.SECRET_TOKEN, {
			expiresIn: '1h'
		});
		res.header('x-access-token', token).send({
			token: token,
			message: 'Success'
		});
	} catch (error) {
		let message = error instanceof Error ? error.message : 'Unknown error';
		return res.status(400).send(message);
	}
});

//Récupération de tous les pokémons d'un pokédex d'un client
clientsRouter.get(
	'/pokedex/pokemons',
	VerifyToken,
	Cache,
	async (req: Request, res: Response) => {
		try {
			const result = await clientController.getPokemonsInPokedex(
				req.body.mailClient
			);
			return res.status(201).send(result);
		} catch (error) {
			let message = error instanceof Error ? error.message : 'Unknown error';
			return res.status(400).send(message);
		}
	}
);

//Récupération d'un pokémon d'un pokédex d'un client
clientsRouter.get(
	'/pokedex/pokemon/:name',
	VerifyToken,
	Cache,
	async (req: Request, res: Response) => {
		try {
			const clientData: any = {
				mailClient: req.body.mailClient,
				nomPokemon: req.params.name
			};

			//Test si les données ne sont pas manquantes
			if (!clientData.mailClient || !clientData.nomPokemon) {
				throw new Error('Something missing');
			}

			//Test si l'utilisateur existe
			const clientExist = await clientService.checkMailExist(
				clientData.mailClient
			);

			if (!clientExist) {
				return res.status(400).send('User not found');
			}

			//Test si le pokédex existe
			const pokedexExist = await pokedexService.checkPokemoninPokedexExist(
				clientData
			);
			if (!pokedexExist) {
				return res.status(400).send('Pokedex not found');
			}

			const result = await clientController.getPokemonInPokedex(clientData);
			return res.status(201).send(result);
		} catch (error) {
			let message = error instanceof Error ? error.message : 'Unknown error';
			return res.status(400).send(message);
		}
	}
);

//Suppression d'un client
clientsRouter.delete('/', VerifyToken, async (req: Request, res: Response) => {
	try {
		//Test si les données ne sont pas manquantes
		if (!req.body.mailClient) {
			throw new Error('Something missing');
		}

		//Test si l'utilisateur existe
		const clientExist = await clientService.checkMailExist(
			req.body.mailClient
		);

		if (!clientExist) {
			return res.status(400).send('User not found');
		}

		const result = await clientController.deleteByMail(req.body.mailClient);
		return res.status(201).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'Unknown error';
		return res.status(400).send(message);
	}
});

//Modification d'un client
clientsRouter.put('/', VerifyToken, async (req: Request, res: Response) => {
	const mailClient = req.body.mailClient;
	const clientToUpdate = req.body.username;

	try {
		//Test si les données ne sont pas manquantes
		if (!mailClient || !clientToUpdate) {
			throw new Error('Something missing');
		}

		//Test si l'utilisateur existe
		const clientExist = await clientService.checkMailExist(mailClient);

		if (!clientExist) {
			return res.status(400).send('Client not found');
		}

		const result = await clientController.update(mailClient, clientToUpdate);
		return res.status(201).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'Unknown error';
		return res.status(400).send(message);
	}
});

export default clientsRouter;
