import express, { Request, Response } from 'express';
import cors from 'cors';
import { Productroute } from './Products/Products.route';
import { OrderRoute } from './Orders/Order.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', Productroute);
app.use('/api/orders', OrderRoute);
app.get("/", (req: Request, res: Response) => {
    res.json({ success: true, server: "running............." });
  });

export default app;
