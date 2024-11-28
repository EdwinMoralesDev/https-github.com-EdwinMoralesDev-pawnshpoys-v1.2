"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductsGrid } from "@/components/products/products-grid";
import { Categories } from "@/components/categories";
import { Shops } from "@/components/shops";
import { NearbyLocations } from "@/components/locations/nearby-locations";
import { Store, ShoppingBag, Navigation2 } from "lucide-react";
import { useState } from "react";

export function BrowseTabs() {
  const [activeTab, setActiveTab] = useState("pawnshops");

  return (
    <div className="w-full container mx-auto px-2 sm:px-4">
      <Tabs defaultValue="pawnshops" className="w-full" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex w-full max-w-md mx-auto mb-6 h-10 p-1 gap-1">
          <TabsTrigger 
            value="pawnshops" 
            className="flex items-center justify-center gap-1.5 px-3 flex-1 h-8 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
          >
            <Store className="h-4 w-4 flex-shrink-0" />
            <span className="text-xs font-medium">Pawnshops</span>
          </TabsTrigger>
          <TabsTrigger 
            value="products" 
            className="flex items-center justify-center gap-1.5 px-3 flex-1 h-8 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
          >
            <ShoppingBag className="h-4 w-4 flex-shrink-0" />
            <span className="text-xs font-medium">Products</span>
          </TabsTrigger>
          <TabsTrigger 
            value="nearby" 
            className="flex items-center justify-center gap-1.5 px-3 flex-1 h-8 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
          >
            <Navigation2 className="h-4 w-4 flex-shrink-0" />
            <span className="text-xs font-medium">Nearby</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pawnshops" className="animate-in fade-in-50 duration-500 focus-visible:outline-none">
          <Shops />
        </TabsContent>

        <TabsContent value="products" className="animate-in fade-in-50 duration-500 focus-visible:outline-none">
          <div className="space-y-8">
            <Categories />
            <ProductsGrid />
          </div>
        </TabsContent>

        <TabsContent value="nearby" className="animate-in fade-in-50 duration-500 focus-visible:outline-none">
          <NearbyLocations />
        </TabsContent>
      </Tabs>
    </div>
  );
}