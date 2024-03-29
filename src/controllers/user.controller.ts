import * as service from '../services/user.service';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';

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
export const register = async (req: Request, res: Response) => {
	const { email, username, password } = req.body;

	if (!email || !username || !password) {
		return res
			.status(400)
			.send(
				'Missing required data. Please provide email, username, and password.'
			);
	}

	const userPassword = await bcrypt.hash(password, 10);

	const userExist = await service.checkIfUserExistByUsernameOrEmail(
		username,
		email
	);

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
	const { user, ...data } = req.body;

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

	if (data.email || data.username) {
		const userBddExist = await service.checkIfUserExistByUsernameOrEmail(
			data.username,
			data.email
		);

		if (userBddExist) {
			return res.status(404).send('User already exist');
		}
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
		return res.status(500).send('Error while deleting the user');
	}
};

//	Connexion d'un utilisateur
export const login = async (req: Request, res: Response) => {
	const { data, password } = req.body;

	const user = await service.getUser(data);

	if (!user) {
		return res.status(404).send('User not found');
	}

	try {
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res.status(401).send('Invalid password');
		}

		if (!process.env.ACCESS_TOKEN || !process.env.REFRESH_TOKEN) {
			return res
				.status(401)
				.send('Missing token. Please check your environment variables');
		}

		const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, {
			expiresIn: '600s'
		});

		const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN, {
			expiresIn: '86400s'
		});

		return res.status(200).send({
			accessToken: accessToken,
			refreshToken: refreshToken
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send('Error while login the user');
	}
};

//	Récupération des données de l'utilisateur connecté
export const getUserConnected = async (req: Request, res: Response) => {
	const user = await service.getUser(req.body.user.username);

	if (!user) {
		return res.status(404).send('User not found');
	}
	return res.status(200).send(user);
};

//	Refresh token
export const refreshToken = async (req: Request, res: Response) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) {
		return res.status(401).send('No token provide');
	}

	if (!process.env.REFRESH_TOKEN) {
		return res
			.status(401)
			.send(
				'Missing refresh token. Please check your environment variables'
			);
	}

	jwt.verify(token, process.env.REFRESH_TOKEN, async (error, user) => {
		if (error) {
			return res.status(401).send('Unauthorized ');
		}

		if (!user) {
			return res.status(404).send('User not found');
		}

		if (typeof user === 'string') {
			return res.status(401).send('Unauthorized');
		}

		const { iat, exp, ...data } = user;

		const userBdd = await service.checkIfUserExistById(data.id);

		if (!userBdd) {
			return res.status(404).send('User not found');
		}

		if (!process.env.ACCESS_TOKEN) {
			return res
				.status(401)
				.send(
					'Missing refresh token. Please check your environment variables'
				);
		}

		const refreshToken = jwt.sign(data, process.env.ACCESS_TOKEN, {
			expiresIn: '600s'
		});

		return res.status(200).send({
			accessToken: refreshToken
		});
	});
};

//	Création des pokémons dans le pokédex de l'utilisateur
export const addPokemons = async (req: Request, res: Response) => {
	const { user, pokemons } = req.body;

	if (!user || !pokemons) {
		return res
			.status(400)
			.send('Missing required data. Please provide pokemons.');
	}

	const existingUser = await service.getUser(user.email);

	if (!existingUser) {
		return res.status(404).send('User not found');
	}

	const lowerCaseNewPokemons = pokemons.map((pokemon: string) =>
		pokemon.toLowerCase()
	);

	const lowerCasePokemonsExistingPokemons = existingUser.pokedex.map(
		(pokemon: string) => pokemon.toLowerCase()
	);

	const uniquePokemons = [
		...new Set([
			...lowerCasePokemonsExistingPokemons,
			...lowerCaseNewPokemons
		])
	];

	try {
		const updatedUser = await service.addPokemons(user.id, uniquePokemons);
		return res.status(200).send(updatedUser);
	} catch (error) {
		console.error(error);
		return res.status(500).send('Error while updating the user');
	}
};
