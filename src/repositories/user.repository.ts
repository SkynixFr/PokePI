import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//  Récupération de tous les utilisateurs
export const getUsers = async () => {
	const users = await prisma.user.findMany();
	return users;
};

//  Récupération d'un utilisateur par son pseudo ou email
export const getUser = async (data: string) => {
	const user = await prisma.user.findFirst({
		where: {
			OR: [
				{
					email: { equals: data, mode: 'insensitive' }
				},
				{
					username: { equals: data, mode: 'insensitive' }
				}
			]
		}
	});
	return user;
};

//  Création d'un utilisateur
export const createUser = async (
	username: string,
	email: string,
	password: string
) => {
	const user = await prisma.user.create({
		data: {
			username,
			email,
			password
		}
	});
	return user;
};

//  Recherche d'un utilisateur par son pseudo ou email
export const findUser = async (username: string, email: string) => {
	return await prisma.user.findFirst({
		where: {
			OR: [
				{ username: { equals: username, mode: 'insensitive' } },
				{ email: { equals: username, mode: 'insensitive' } }
			]
		}
	});
};
