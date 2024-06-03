import express from 'express';
import cors from 'cors';
import { Productroute } from './Products/Products.route';
import { OrderRoute } from './Products/Orders/Order.route';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/products', Productroute);
app.use('/api/orders', OrderRoute);

export default app;
