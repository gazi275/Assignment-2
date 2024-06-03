import { z } from 'zod';

export const orderSchema = z.object({
  email: z.string().email('Invalid email address'),
  productId: z.string().min(1, 'Product ID is required'),
  price: z.number().positive('Price must be positive'),
  quantity: z
    .number()
    .positive('Quantity must be positive')
    .int('Quantity must be an integer'),
});
