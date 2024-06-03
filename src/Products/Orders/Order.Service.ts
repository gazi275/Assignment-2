import { Error } from 'mongoose';
import { ProductModel } from '../Products.model';
import { Order } from './Order.interface';
import { OrderModel } from './Order.model';

const CreateOrderService = async (order: Order) => {
  const id = order.productId;
  const Idexist = await ProductModel.findById(id);
  if (!Idexist) {
    throw new Error('Order not found!');
  } else {
    const newQuantity = Idexist.inventory.quantity - order.quantity;
    if (
      Idexist.inventory.inStock &&
      newQuantity >= 0 &&
      newQuantity <= Idexist.inventory.quantity
    ) {
      const result = await OrderModel.create(order);
      await ProductModel.updateOne(
        { _id: id },
        {
          'inventory.quantity': newQuantity,
          'inventory.inStock': newQuantity > 0,
        },
      );
      return result;
    } else {
      throw new Error('InsInsufficient quantity available in inventory');
    }
  }
};

const getOrderService = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrderByEmailServcie = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};
export const SertvicesToController = {
  CreateOrderService,
  getOrderService,
  getOrderByEmailServcie,
};
