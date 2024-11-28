"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { createSlug } from "@/lib/utils/slugs";

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  storeName?: string;
  hideStoreButton?: boolean;
}

export function ProductCard({ 
  name, 
  price, 
  description, 
  category, 
  image,
  storeName = "Tampa Gold & Diamond Exchange",
  hideStoreButton = false
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const imageSize = hideStoreButton ? "aspect-[3/2.5]" : "aspect-[4/3]";
  const storeSlug = createSlug(storeName);

  return (
    <div className={cn(
      "bg-white rounded-xl overflow-hidden border border-gray-100",
      "shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
      "transition-all duration-300",
      hideStoreButton && "text-sm"
    )}>
      <div className={cn(imageSize, "relative overflow-hidden")}>
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={cn(
            "absolute top-2 right-2 rounded-full bg-white/90 backdrop-blur-sm",
            "hover:bg-white shadow-sm transition-all duration-200 hover:scale-110",
            hideStoreButton ? "p-1" : "p-1.5"
          )}
        >
          <Heart
            className={cn(
              hideStoreButton ? "w-3 h-3" : "w-3.5 h-3.5",
              "transition-colors",
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            )}
          />
        </button>
      </div>
      <div className={cn("p-2.5", !hideStoreButton && "p-3")}>
        <h3 className={cn(
          "font-medium line-clamp-1 mb-1",
          hideStoreButton ? "text-[11px]" : "text-xs"
        )}>{name}</h3>
        <p className={cn(
          "text-muted-foreground line-clamp-2 mb-2",
          hideStoreButton ? "text-[10px]" : "text-[11px]"
        )}>{description}</p>
        <div className="flex items-center justify-between">
          <span className={cn(
            "font-semibold",
            hideStoreButton ? "text-[11px]" : "text-xs"
          )}>${price.toLocaleString()}</span>
          {!hideStoreButton && (
            <Link href={`/shops/${storeSlug}`} passHref>
              <Button 
                size="sm" 
                variant="outline" 
                className="h-7 px-2.5 text-[11px] hover:bg-primary hover:text-primary-foreground"
              >
                Store
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}