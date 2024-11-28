"use client";

import { useEffect, useRef } from 'react';
import { shops } from '@/components/shops/constants';

// Florida center coordinates
const FLORIDA_CENTER = [27.6648, -81.5158];

export function CartoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mapRef.current || !(window as any).L) return;

    const map = (window as any).L.map(mapRef.current).setView(FLORIDA_CENTER, 7);
    
    (window as any).L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '© CARTO'
    }).addTo(map);

    // Add markers for each shop
    shops.forEach((shop) => {
      // In a real application, you would use actual coordinates from your database
      const marker = (window as any).L.marker(FLORIDA_CENTER).addTo(map);
      
      marker.bindPopup(`
        <div class="p-2">
          <h3 class="font-semibold">${shop.name}</h3>
          <p class="text-sm text-gray-600">${shop.address}</p>
          <p class="text-sm text-primary mt-1">${shop.phone}</p>
        </div>
      `);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg overflow-hidden border border-border"
    />
  );
}