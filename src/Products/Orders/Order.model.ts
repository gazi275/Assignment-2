import { Schema,model } from "mongoose";
import { Order } from "./Order.interface";

const OrderSchema=new Schema<Order>({
    email: { type: "string", required: true },
    productId: { type: "string", required: true },
    price: { type: "number", required: true },
    quantity: { type: "number", required: true },
})

export const OrderModel=model<Order> ('Order',OrderSchema)