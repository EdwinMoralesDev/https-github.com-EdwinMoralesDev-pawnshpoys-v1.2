"use client";

import { ShopCard } from "./shop-card";
import { useSearchStore } from "@/lib/stores/search-store";

export function ShopsList() {
  const { filteredShops } = useSearchStore();

  if (filteredShops.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No pawnshops found matching your search criteria
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {filteredShops.map((shop) => (
        <ShopCard
          key={shop.id}
          name={shop.name}
          address={shop.address}
          phone={shop.phone}
        />
      ))}
    </div>
  );
}