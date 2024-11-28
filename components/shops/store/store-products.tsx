"use client";

import { ProductCard } from "@/components/products/product-card";
import { useProductStore } from "@/lib/stores/product-store";
import { CategoryBadge } from "@/components/categories/category-badge";
import { Shop } from "@/lib/types/shop";
import { useState } from "react";

interface StoreProductsProps {
  shop: Shop;
}

export function StoreProducts({ shop }: StoreProductsProps) {
  const { products, categories } = useProductStore();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const storeProducts = products
    .slice(0, 8)
    .filter(product => !activeCategory || product.category === activeCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Available Products</h2>
        <span className="text-sm text-muted-foreground">
          {storeProducts.length} items
        </span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        <CategoryBadge
          key="all"
          label="All Products"
          isActive={activeCategory === null}
          onClick={() => setActiveCategory(null)}
        />
        {categories.map((category) => (
          <CategoryBadge
            key={category}
            label={category}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 xs:gap-3 sm:gap-4">
        {storeProducts.map((product) => (
          <ProductCard 
            key={product.name} 
            {...product} 
            hideStoreButton={true}
            storeName={shop.name}
          />
        ))}
      </div>
    </div>
  );
}