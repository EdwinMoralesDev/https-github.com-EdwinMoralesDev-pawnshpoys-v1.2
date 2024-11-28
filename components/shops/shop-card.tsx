"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { StoreIcon } from "./store-icon";
import { createSlug } from "@/lib/utils/slugs";

interface ShopCardProps {
  name: string;
  address: string;
  phone: string;
}

export function ShopCard({ name, address, phone }: ShopCardProps) {
  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleMap = () => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, "_blank");
  };

  const storeSlug = createSlug(name);

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="p-4 space-y-4">
        <div className="flex gap-3">
          <StoreIcon 
            name={name} 
            className="w-12 h-12 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold line-clamp-1">{name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{address}</p>
            <button
              onClick={handleCall}
              className="text-sm text-primary hover:underline transition-colors"
            >
              {phone}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button 
            onClick={handleMap} 
            variant="outline" 
            className="w-full transition-colors"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">Map</span>
          </Button>
          <Link href={`/shops/${storeSlug}`} passHref>
            <Button 
              variant="outline" 
              className="w-full transition-colors"
            >
              <span className="text-sm">Store</span>
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}