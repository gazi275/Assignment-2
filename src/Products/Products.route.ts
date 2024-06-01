import express from 'express';
import { ControllerBackToRoute } from './Products.controller';
const router = express.Router();
router.post('/', ControllerBackToRoute.CreateProductController);
router.get('/', ControllerBackToRoute.getProductsController);
router.get('/:productId', ControllerBackToRoute.getproductsByIdController);
router.put('/:productId', ControllerBackToRoute.UpdateProductController);
router.delete('/:productId', ControllerBackToRoute.deleteProductController);
router.get('/',ControllerBackToRoute.searchProductController)
export const Productroute = router;
