import express from 'express';

import { testRouter } from './testRouter.mjs';
import { authRouter } from './authRouter.mjs';

const router = express.Router();

router.use('/test', testRouter);

router.use('/auth', authRouter);

export default router;
