import { Router } from 'express';
import clientsRouter from './clients.routes';
import PokemonRouter from './pokemon.routes';
import VerifyToken from '../middlewares/authToken';
//Configuration des routes clients et pokemon
const router = Router();

router.use('/client', clientsRouter);
router.use('/pokemon', VerifyToken, PokemonRouter);

export default router;
