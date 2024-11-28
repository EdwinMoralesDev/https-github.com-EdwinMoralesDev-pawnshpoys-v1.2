"use client";

import { StoreIcon } from "@/components/shops/store-icon";
import { MapPin, Clock, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shop } from "@/lib/types/shop";
import { useRouter } from "next/navigation";

interface StoreHeaderProps {
  shop: Shop;
}

export function StoreHeader({ shop }: StoreHeaderProps) {
  const router = useRouter();

  const handleGetDirections = () => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(shop.address)}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${shop.phone}`;
  };

  return (
    <div className="w-full bg-card border-b">
      <div className="container mx-auto p-4">
        <Button
          variant="ghost"
          className="mb-4 -ml-2 text-muted-foreground hover:text-foreground"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to pawnshop
        </Button>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <StoreIcon name={shop.name} className="w-16 h-16" />
          
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold mb-2 line-clamp-1">{shop.name}</h1>
            
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="line-clamp-2">{shop.address}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Open today: 9 AM - 6 PM</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto mt-4 sm:mt-0">
            <Button 
              variant="outline" 
              onClick={handleGetDirections}
              className="flex-1 sm:flex-initial"
            >
              Get Directions
            </Button>
            <Button 
              onClick={handleCall}
              className="flex-1 sm:flex-initial"
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}