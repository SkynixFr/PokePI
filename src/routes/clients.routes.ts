import { Router, Request, Response } from 'express';
import Client from '../models/client.interface';
import * as clientController from '../controllers/client.controller';
const bcrypt = require('bcrypt');

const clientsRouter = Router();

clientsRouter.post('/', async (req: Request, res: Response) => {
	try {
		const clientData: Client = req.body;
		clientData.mdpClient = await bcrypt.hash(clientData.mdpClient, 10);
		const result = await clientController.create(clientData);
		return res.status(201).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(400).send(message);
	}
});

clientsRouter.post('/login', async (req: Request, res: Response) => {
	try {
	} catch (error) {}
});

clientsRouter.get('/:id', async (req: Request, res: Response) => {
	try {
		const id = Number(req.params.id);
		const result = await clientController.getById(id);
		return res.status(200).send(result);
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

clientsRouter.delete('/:id', async (req: Request, res: Response) => {
	try {
		const id = Number(req.params.id);
		const result = await clientController.deleteById(id);
		return res.status(204).send({ success: result });
	} catch (error) {
		let message = error instanceof Error ? error.message : 'unknown error';
		return res.status(404).send(message);
	}
});

export default clientsRouter;
