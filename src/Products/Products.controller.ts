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
export const ControllerBackToRoute = {
  CreateProductController,
};
