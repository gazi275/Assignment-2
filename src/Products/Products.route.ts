import express from 'express';
import { ControllerBackToRoute } from './Products.controller';
const router = express.Router();
router.post('/createProducts', ControllerBackToRoute.CreateProductController);
router.get('/',ControllerBackToRoute.getProductsController)
router.get('/:productId',ControllerBackToRoute.getproductsByIdController)

export const Productroute = router;
