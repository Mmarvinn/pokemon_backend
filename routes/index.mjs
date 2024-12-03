import express from 'express';

import { authRouter } from './authRouter.mjs';
import { pokemonRouter } from './pokemonRoutes.mjs';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/pokemon', pokemonRouter);

export default router;
