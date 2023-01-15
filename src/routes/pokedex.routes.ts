import { Router, Request, Response } from 'express';
import Pokedex from '../models/pokedex.interface';
import * as pokedexController from '../controllers/pokedex.controller';
import * as pokedexService from '../services/pokedex.service';
import Cache from '../middlewares/cache';

const PokedexRouter = Router();

//Création de l'utilisateur 
//Récupération de tous les noms de pokémons avec l'api PokeApi
PokedexRouter.post('/pokemon/:name', Cache, async (req: Request, res: Response) => {

});