"use client";

import { useState } from "react";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { shops } from "@/components/shops/constants";
import { CartoMap } from "./carto-map";

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  distance?: number;
}

export function NearbyLocations() {
  const [locations, setLocations] = useState<Location[]>(
    shops.map(shop => ({
      ...shop,
      distance: Math.random() * 20 // Simulated distances in miles
    }))
  );

  const sortedLocations = [...locations].sort((a, b) => 
    (a.distance || 0) - (b.distance || 0)
  );

  const handleGetDirections = (address: string) => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, "_blank");
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-6">
        <Navigation className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold">Nearby Locations</h2>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-[1fr,400px]">
        <CartoMap />
        
        <div className="space-y-4">
          {sortedLocations.map((location) => (
            <Card key={location.id} className="p-4">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">{location.name}</h3>
                  <span className="text-sm text-primary font-medium">
                    {location.distance?.toFixed(1)} mi
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{location.address}</span>
                </p>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleGetDirections(location.address)}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Directions
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleCall(location.phone)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}