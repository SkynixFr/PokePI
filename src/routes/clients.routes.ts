import { Router, Request, Response } from 'express';
import * as clientController from '../controllers/user.controller';

const clientsRouter = Router();

//  Récupération de tous les utilisateurs
clientsRouter.get('/', clientController.getUsers);

//  Récupération d'un utilisateur par son email ou pseudo
clientsRouter.get('/:user', clientController.getUser);

//  Création d'un utilisateur
clientsRouter.post('/register', clientController.createUser);

//  Modification d'un utilisateur
clientsRouter.put('/:user');

export default clientsRouter;
