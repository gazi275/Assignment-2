import express, { Request, Response, Router } from 'express';
import cors from 'cors';
import { Productroute } from './Products/Products.route';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/products', Productroute);

export default app;
