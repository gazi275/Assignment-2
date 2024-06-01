import { Products } from './Products.interface';
import { ProductModel } from './Products.model';

const ProductsService = async (Products: Products) => {
  const result = await ProductModel.create(Products);
  return result;
};

export const ProductsServiceToController = {
  ProductsService,
};
