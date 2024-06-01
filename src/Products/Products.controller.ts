import { Request, Response } from 'express';
import { ProductsServiceToController } from './Products.service';

const CreateProductController = async (req: Request, res: Response) => {
  try {
    const Products = req.body;
    const result = await ProductsServiceToController.ProductsService(Products);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: Products,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Something was wrong',
      details: error,
    });
  }
};

const getProductsController=async(req:Request,res:Response)=>{
    try {
        const ProductId= req.body
        const result=await ProductsServiceToController.getProductsService() 
        res.status(200).json({
            "success": true,
    "message": "Products fetched successfully!",
    "data":result
        })
    } catch (error) {
      console.log(error);  
    }

}
const getproductsByIdController=async(req:Request,res:Response)=>{
try {
    const {productId}=req.params
    const result=await ProductsServiceToController.getProductsById(productId)
    res.status(200).json({
        "success": true,
        "message": "Product fetched successfully!",
        data:result
    }) 
} catch (error) {
    console.log(error);
}
}



export const ControllerBackToRoute = {
  CreateProductController,
  getProductsController,
  getproductsByIdController
};
