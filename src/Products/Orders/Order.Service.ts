import { Error } from "mongoose";
import { ProductModel } from "../Products.model";
import { Order } from "./Order.interface";
import { OrderModel } from "./Order.model";
import app from './../../app';

const CreateOrderService=async(order:Order)=>{
    const id= order.productId
    const Idexist= await ProductModel.findById(id)
    if (!Idexist) {
        throw new Error('Product is not Available!')
        
    } else {
        const newQuantity= Idexist.inventory.quantity - order.quantity
        if (Idexist.inventory.inStock && newQuantity >= 0 && newQuantity<= Idexist.inventory.quantity) {
            const result =await OrderModel.create(order)
            await ProductModel.updateOne({_id:id},{"inventory.quantity": newQuantity, "inventory.inStock": newQuantity>0})
            return result
        } else {
            throw new Error('InsInsufficient quantity available in inventory')
        }
    }
}
export const SertvicesToController={
    CreateOrderService,
}