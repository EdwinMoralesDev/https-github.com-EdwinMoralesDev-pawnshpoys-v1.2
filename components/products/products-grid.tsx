"use client";

import { ProductCard } from "./product-card";
import { useProductStore } from "@/lib/stores/product-store";

export function ProductsGrid() {
  const { filteredProducts } = useProductStore();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 p-1">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.name}
          {...product}
        />
      ))}
    </div>
  );
}