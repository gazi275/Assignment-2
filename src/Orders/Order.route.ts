import express, { Request, Response } from 'express';
import { ControllerToRoute } from './Order.Controller';
const route = express.Router();

route.post('/', ControllerToRoute.CreateOrder);
route.get('/', (req: Request, res: Response) => {
  if (req.query.email) {
    ControllerToRoute.getOrderByEmail(req, res);
  } else {
    ControllerToRoute.getOrderCOntroller(req, res);
  }
});

export const OrderRoute = route;
