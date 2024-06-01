import { Products } from './Products.interface';
import { ProductModel } from './Products.model';

const ProductsService = async (Products: Products) => {
  const result = await ProductModel.create(Products);
  return result;
};
const getProductsService= async( )=>{
    const result= await ProductModel.find()
    return result;
}
const getProductsById= async(_id:string)=>{
    const result=await ProductModel.findOne({_id})
    return result
}



export const ProductsServiceToController = {
  ProductsService,
  getProductsService,
  getProductsById
};
