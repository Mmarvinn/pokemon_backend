import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import rootRouter from './routes/index.mjs';
// import { stripeWebhookHandler } from './controllers/payments/stripeWebhook.mjs';
// import { clearDbFromOldNotCompletedOrders } from './services/clearDbFromOldNotCompletedOrders.mjs';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json({ limit: '10mb' }));

app.use(rootRouter);

app.listen(PORT, () => {
  clearDbFromOldNotCompletedOrders();
  console.log('server started at port:', PORT);
});

export default app;
