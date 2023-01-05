import { Router } from 'express';
import clientsRouter from './clients.routes';
import PokemonRouter from './pokemon.routes';

const router = Router();

router.use('/clients', clientsRouter);
router.use('/pokemon', PokemonRouter);

export default router;
