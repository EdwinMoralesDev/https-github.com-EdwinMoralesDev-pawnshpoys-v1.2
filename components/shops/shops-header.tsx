"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchStore } from "@/lib/stores/search-store";

export function ShopsHeader() {
  const { query, setQuery } = useSearchStore();

  return (
    <div className="flex items-center justify-between mb-6 gap-4">
      <h2 className="text-2xl font-semibold">Pawnshops</h2>
      <div className="relative w-[220px] sm:w-[300px] flex-shrink-0">
        <Input
          type="search"
          placeholder="Pawnshops near you"
          className="pr-12 rounded-full border-2 h-10 bg-background text-sm sm:text-base sm:placeholder:text-base placeholder:text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute right-1 top-1 h-8 w-8 flex items-center justify-center bg-primary rounded-full">
          <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
}