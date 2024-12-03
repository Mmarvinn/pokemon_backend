import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.mjs';
import { getPokemonsHandler } from '../controllers/pokemon/getPokemons.mjs';
import { postBattleLogsHandler } from '../controllers/pokemon/postBattleLogs.mjs';

export const pokemonRouter = express.Router();

pokemonRouter.get('/get_all', authMiddleware, getPokemonsHandler);
pokemonRouter.post('/logs', authMiddleware, postBattleLogsHandler);
