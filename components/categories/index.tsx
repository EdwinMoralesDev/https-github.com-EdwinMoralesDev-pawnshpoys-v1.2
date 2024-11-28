"use client";

import { CategoriesList } from "./categories-list";

export function Categories() {
  return (
    <section className="pt-2 w-full">
      <div className="container mx-auto">
        <CategoriesList />
      </div>
    </section>
  );
}