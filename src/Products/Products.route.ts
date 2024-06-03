import express, { Request, Response } from 'express';
import { ControllerBackToRoute } from './Products.controller';
const router = express.Router();
router.post('/', ControllerBackToRoute.CreateProductController);
router.get('/', (req:Request,res:Response)=>{
    if (req.query?.searchTerm) {
        ControllerBackToRoute.searchProductController(req,res)
        
    } else {
       ControllerBackToRoute.getProductsController (req,res)
    }
});
router.get('/:productId', ControllerBackToRoute.getproductsByIdController);
router.put('/:productId', ControllerBackToRoute.UpdateProductController);
router.delete('/:productId', ControllerBackToRoute.deleteProductController);

export const Productroute = router;
