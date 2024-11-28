"use client";

import { ShopsList } from "./shops-list";
import { ShopsHeader } from "./shops-header";

export function Shops() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <ShopsHeader />
        <ShopsList />
      </div>
    </section>
  );
}