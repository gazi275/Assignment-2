import express from 'express';
import { ControllerBackToRoute } from './Products.controller';
const router = express.Router();
router.post('/createProducts', ControllerBackToRoute.CreateProductController);

export const Productroute = router;
