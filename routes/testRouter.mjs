import express from 'express';

import { testMongo } from '../controllers/testMongo.mjs';
import { getTestDataHandler } from '../controllers/getTestData.mjs';
import { postTestDataHandler } from '../controllers/postTestData.mjs';
import { updateTestDataHandler } from '../controllers/updateTestData.mjs';
import { deleteTestDataHandler } from '../controllers/deleteTestData.mjs';

export const testRouter = express.Router();

testRouter.get('/test_mongo', testMongo);
testRouter.get('/get_data', getTestDataHandler);
testRouter.post('/post_data', postTestDataHandler);
testRouter.put('/update/:id', updateTestDataHandler);
testRouter.delete('/delete/:id', deleteTestDataHandler);
