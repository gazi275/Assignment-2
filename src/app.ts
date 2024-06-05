import express, { Request, Response } from 'express';
import cors from 'cors';
import { Productroute } from './Products/Products.route';
import { OrderRoute } from './Orders/Order.route';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/',async(req:Request,res:Response)=>{
    res.send('server is running..!')
})
app.use('/api/products', Productroute);
app.use('/api/orders', OrderRoute);

export default app;
