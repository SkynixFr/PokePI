import { Router, Request, Response } from 'express';
import * as clientController from '../controllers/user.controller';
import authToken from '../middlewares/authToken';

const clientsRouter = Router();

//  Récupération des données de l'utilisateur connecté
clientsRouter.get('/me', authToken, clientController.getUserConnected);

//  Récupération de tous les utilisateurs
clientsRouter.get('/', authToken, clientController.getUsers);

//  Récupération d'un utilisateur par son email ou pseudo
clientsRouter.get('/:user', authToken, clientController.getUser);

//  Création d'un utilisateur
clientsRouter.post('/register', clientController.register);

//  Modification d'un utilisateur
clientsRouter.put('/:id', authToken, clientController.updateUser);

//  Suppression d'un utilisateur
clientsRouter.delete('/:id', authToken, clientController.deleteUser);

//  Connexion d'un utilisateur
clientsRouter.post('/login', clientController.login);

//  Refresh token
clientsRouter.post('/refreshToken', clientController.refreshToken);

//  Création de pokémon dans le pokédex de l'utilisateur
clientsRouter.post('/pokemons', authToken, clientController.addPokemons);

export default clientsRouter;
