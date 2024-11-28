export interface Shop {
  id: number;
  name: string;
  address: string;
  phone: string;
}

export interface ShopWithProducts extends Shop {
  products?: Product[];
}

export interface Product {
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}