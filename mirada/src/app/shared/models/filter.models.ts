export interface ColorOption {
  color: string;
  price: number;
  path: string;
}

export interface Product {
  id: number;
  itemName: string;
  category: string;
  color: ColorOption[];
}