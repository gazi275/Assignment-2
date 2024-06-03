import { Request, Response } from 'express';
import { ProductsServiceToController } from './Products.service';

const CreateProductController = async (req: Request, res: Response) => {
  try {
    const Products = req.body;
    const result = await ProductsServiceToController.ProductsService(Products);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Something was wrong',
      details: error,
    });
  }
};

const getProductsController = async (req: Request, res: Response) => {
  try {
    req.body;
    const result = await ProductsServiceToController.getProductsService();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getproductsByIdController = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductsServiceToController.getProductsById(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const UpdateProductController = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProduct = req.body;
    const result = await ProductsServiceToController.UpdateProductService(
      productId,
      updatedProduct,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

const deleteProductController = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductsServiceToController.deleteProductService(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};

const searchProductController = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query?.searchTerm;
    const result = await ProductsServiceToController.searchProduct(
      searchTerm as string,
    );
    res.status(200).send({
      success: true,
      message: 'Product fetched successfully',
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Internal server error', error });
  }
};

export const ControllerBackToRoute = {
  CreateProductController,
  getProductsController,
  getproductsByIdController,
  UpdateProductController,
  deleteProductController,
  searchProductController,
};
