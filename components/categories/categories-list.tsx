"use client";

import { CategoryBadge } from "./category-badge";
import { useProductStore } from "@/lib/stores/product-store";

export function CategoriesList() {
  const { categories, activeCategory, setActiveCategory } = useProductStore();

  return (
    <div className="w-full overflow-x-auto scrollbar-hide pb-2">
      <div className="flex gap-2 min-w-max px-4 md:px-0 md:justify-center">
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
    </div>
  );
}