export interface variants {
  type: string;
  value: string;
}

export interface inventory {
  quantity: number;
  inStock: boolean;
}

export interface Products {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: variants[];
  inventory: inventory;
}
