import { Router, Request, Response } from 'express';
import * as clientController from '../controllers/user.controller';
import authToken from '../middlewares/authToken';

const clientsRouter = Router();

//  Récupération des données de l'utilisateur connecté
clientsRouter.get('/me', authToken, clientController.getUserConnected);

//  Récupération de tous les utilisateurs
clientsRouter.get('/', clientController.getUsers);

//  Récupération d'un utilisateur par son email ou pseudo
clientsRouter.get('/:user', clientController.getUser);

//  Création d'un utilisateur
clientsRouter.post('/register', clientController.register);

//  Modification d'un utilisateur
clientsRouter.put('/:id', clientController.updateUser);

//  Suppression d'un utilisateur
clientsRouter.delete('/:id', clientController.deleteUser);

//  Connexion d'un utilisateur
clientsRouter.post('/login', clientController.login);

//  Refresh token
clientsRouter.post('/refreshToken', clientController.refreshToken);

export default clientsRouter;
