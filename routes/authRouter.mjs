import express from 'express';
import { getNonceHandler } from '../controllers/auth/getNonce.mjs';
import { postLoginHandler } from '../controllers/auth/postLogin.mjs';
import { getUserHandler } from '../controllers/auth/getUser.mjs';
import { authMiddleware } from '../middlewares/authMiddleware.mjs';

export const authRouter = express.Router();

authRouter.get('/nonce', getNonceHandler);
authRouter.post('/login', postLoginHandler);
authRouter.get('/get_user', authMiddleware, getUserHandler);
