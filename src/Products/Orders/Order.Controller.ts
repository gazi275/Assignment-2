import { Request, Response } from 'express';
import { SertvicesToController } from './Order.Service';

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const Order = req.body;
    const result = await SertvicesToController.CreateOrderService(Order);
    res.json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Product Is not found',
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
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
      data: result,
    });
  } catch (error) {}
};

export const ControllerToRoute = {
  CreateOrder,
  getOrderCOntroller,
  getOrderByEmail,
};
