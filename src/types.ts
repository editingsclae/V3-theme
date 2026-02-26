export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  discount?: string;
  onSale?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}
