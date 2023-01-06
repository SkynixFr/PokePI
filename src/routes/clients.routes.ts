import { Router, Request, Response, NextFunction } from 'express';
import Client from '../models/client.interface';
import * as clientController from '../controllers/client.controller';
import * as clientRepository from '../repositories/client.repository';
import * as clientService from '../services/client.service';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const clientsRouter = Router();

//Création de l'utilisateur
clientsRouter.post('/register', async (req: Request, res: Response) => {
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
			expiresIn: '5m'
		});
		res.header('x-access-token', token).send({
			message: 'Success'
		});
	} catch (error) {
		let message = error instanceof Error ? error.message : 'Unknown error';
		return res.status(400).send(message);
	}
});

clientsRouter.delete('/:id', async (req: Request, res: Response) => {
	try {
		const id = Number(req.params.id);
		const result = await clientController.deleteById(id);
		return res.status(204).send({ success: result });
	} catch (error) {
		let message = error instanceof Error ? error.message : 'Unknown error';
		return res.status(404).send(message);
	}
});

export default clientsRouter;
