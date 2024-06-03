import { Request, Response, } from "express";
import { SertvicesToController } from "./Order.Service";




const CreateOrder=async(req:Request,res:Response)=>{
    try {
        const Order=req.body
    const result= await SertvicesToController.CreateOrderService(Order) 
    res.json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    } catch (error) {
        res.json({
            success: false,
            message: (error as Error).message,
          }); 
    }
    
    
    }

   export const ControllerToRoute ={
 CreateOrder
    }
