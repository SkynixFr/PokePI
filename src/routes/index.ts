import { Router } from 'express';
import clientsRouter from './clients.routes';
import PokemonRouter from './pokemon.routes';

//Configuration des routes clients et pokemon
const router = Router();

router.use('/client', clientsRouter);
router.use('/pokemon', PokemonRouter);

export default router;
