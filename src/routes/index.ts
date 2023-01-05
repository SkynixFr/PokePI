import { Router } from 'express';
import clientsRouter from './clients.routes';

const router = Router();

router.use('/clients', clientsRouter);

export default router;
