import { Request, Response } from 'express';
import { SertvicesToController } from './Order.Service';
import { orderSchema } from './Order.validation';
import { z } from 'zod';

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const Ordervalidation = orderSchema.parse(req.body);
    const result = await SertvicesToController.CreateOrderService(
      Ordervalidation,
    );
    res.json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors,
      });
    }
  }

  {
    res.json({
      success: false,
      message: 'Insufficient quantity available in inventory',
    });
  }
};
const getOrderCOntroller = async (req: Request, res: Response) => {
  try {
    req.body;
    const result = await SertvicesToController.getOrderService();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Route not found!',
    });
  }
};

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await SertvicesToController.getOrderByEmailServcie(
      email as string,
    );
    if (result.length === 0) {
      res.status(500).json({
        success: false,
        message: ' Order not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: ' Order not found',
    });
  }
};

export const ControllerToRoute = {
  CreateOrder,
  getOrderCOntroller,
  getOrderByEmail,
};
