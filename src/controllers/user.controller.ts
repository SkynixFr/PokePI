import * as service from '../services/user.service';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

//  Récupération de tous les utilisateurs
export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await service.getUsers();
		return res.status(200).send(users);
	} catch (error) {
		console.error(error);
		return res.status(500).send('Error while fetching users');
	}
};

//  Récupération d'un utilisateur par son pseudo ou email
export const getUser = async (req: Request, res: Response) => {
	try {
		const data = req.params.user;
		const user = await service.getUser(data);

		if (!user) {
			return res.status(404).send('User not found');
		}

		return res.status(200).send(user);
	} catch (error) {
		return res.status(500).send('Error while fetching the user');
	}
};

//  Création d'un utilisateur
export const createUser = async (req: Request, res: Response) => {
	const { email, username, password } = req.body;

	if (!email || !username || !password) {
		return res
			.status(400)
			.send(
				'Missing required data. Please provide email, username, and password.'
			);
	}

	const userPassword = await bcrypt.hash(password, 10);

	const userExist = await service.checkIfUserExist(username, email);

	if (userExist) {
		return res.status(400).send('User already exist');
	}

	try {
		const newUser = await service.createUser(username, email, userPassword);
		return res.status(201).send(newUser);
	} catch (error) {
		return res.status(500).send('Error while creating the user');
	}
};

// Modification d'un utilisateur
export const updateUser = async (req: Request, res: Response) => {
	const userId = req.params.id;
	const data = req.body;

	if (JSON.stringify(data) === '{}') {
		return res
			.status(400)
			.send(
				'Missing required data. Please provide email, username, or password.'
			);
	}

	const userExist = await service.checkIfUserExistById(userId);

	if (!userExist) {
		return res.status(404).send('User not found');
	}

	if (data.password) {
		const hashedPassword = await bcrypt.hash(data.password, 10);
		data.password = hashedPassword;
	}

	try {
		const updatedUser = await service.updateUser(userId, data);
		return res.status(200).send(updatedUser);
	} catch (error) {
		console.error(error);
		return res.status(500).send('Error while updating the user');
	}
};

//	Suppression d'un utilisateur
export const deleteUser = async (req: Request, res: Response) => {
	const userId = req.params.id;

	const userExist = await service.checkIfUserExistById(userId);

	if (!userExist) {
		return res.status(404).send('User not found');
	}

	try {
		await service.deleteUser(userId);
		return res.status(200).send('User deleted');
	} catch (error) {
		console.error(error);
		return res.status(500).send('Error while updating the user');
	}
};
