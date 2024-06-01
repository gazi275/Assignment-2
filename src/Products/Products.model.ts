import { Schema, model } from 'mongoose';

import { Products, inventory, variants } from './Products.interface';

export const variantsSchema = new Schema<variants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

export const inventorySchema = new Schema<inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

export const ProductsSchema = new Schema<Products>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: [variantsSchema],
  inventory: inventorySchema,
});

export const ProductModel = model<Products>('Product', ProductsSchema);
