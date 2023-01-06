import { Router } from 'express';
import clientsRouter from './clients.routes';
import PokemonRouter from './pokedex.routes';
import pokedexRouter from './pokedex.routes';
import VerifyToken from '../middlewares/authToken';
//Configuration des routes clients et pokemon
const router = Router();

router.use('/client', clientsRouter);
router.use('/pokemon', VerifyToken, PokemonRouter);
router.use('/pokedex',pokedexRouter);
export default router;
