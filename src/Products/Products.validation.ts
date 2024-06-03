import { z } from 'zod';

const variantsSchema = z.object({
  type: z.string().min(1, 'Variant type is required'),
  value: z.string().min(1, 'Variant value is required'),
});

const inventorySchema = z.object({
  quantity: z.number().nonnegative('Quantity must be non-negative'),
  inStock: z.boolean(),
});

const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be positive'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).nonempty('Tags must be a non-empty array'),
  variants: z.array(variantsSchema),
  inventory: inventorySchema,
});

export { productSchema };
