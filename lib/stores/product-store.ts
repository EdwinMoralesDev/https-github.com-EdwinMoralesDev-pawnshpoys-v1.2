import { create } from 'zustand';

interface Product {
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Vintage Rolex Datejust",
    price: 8500,
    description: "1985 Rolex Datejust 36mm in excellent condition with original box and papers",
    category: "Watches",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Diamond Tennis Bracelet",
    price: 3999,
    description: "14K White Gold 5ct Diamond Tennis Bracelet with certification",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "MacBook Pro 16\"",
    price: 1299,
    description: "2022 MacBook Pro with M1 Pro chip, 16GB RAM, 512GB SSD",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Gibson Les Paul",
    price: 2499,
    description: "2020 Gibson Les Paul Standard in Cherry Sunburst",
    category: "Music",
    image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Canon EOS R5",
    price: 2799,
    description: "Canon EOS R5 Mirrorless Camera with RF 24-105mm lens",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Cartier Love Bracelet",
    price: 5999,
    description: "18K Yellow Gold Cartier Love Bracelet, size 17",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "iPhone 14 Pro Max",
    price: 899,
    description: "256GB iPhone 14 Pro Max in Deep Purple, unlocked",
    category: "Phones",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Tiffany Engagement Ring",
    price: 12999,
    description: "Tiffany & Co. 1.5ct Diamond Engagement Ring in Platinum",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Gaming PC Setup",
    price: 1899,
    description: "Custom Gaming PC with RTX 4070, 32GB RAM, 2TB SSD",
    category: "Computing",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=500",
  },
];

interface ProductStore {
  products: Product[];
  categories: string[];
  activeCategory: string | null;
  filteredProducts: Product[];
  setActiveCategory: (category: string | null) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products,
  categories: Array.from(new Set(products.map(product => product.category))).sort(),
  activeCategory: null,
  filteredProducts: products,
  setActiveCategory: (category) =>
    set((state) => ({
      activeCategory: category,
      filteredProducts: category === null
        ? state.products
        : state.products.filter((product) => product.category === category),
    })),
}));