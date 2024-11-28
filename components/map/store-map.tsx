"use client";

import { useEffect, useRef } from 'react';
import { Shop } from '@/lib/types/shop';
import { getCoordinates } from '@/lib/utils/geocoding';

interface StoreMapProps {
  shop: Shop;
}

export function StoreMap({ shop }: StoreMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  
  useEffect(() => {
    if (!mapContainer.current || typeof window === 'undefined' || !(window as any).L) return;
    
    const L = (window as any).L;
    const coordinates = getCoordinates(shop.address);
    
    // Custom map style with soft colors
    const mapStyle = {
      styles: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6c7686" }]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f7f7f7" }]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#e3eef9" }]
        }
      ]
    };
    
    map.current = L.map(mapContainer.current, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false
    }).setView(coordinates, 15);
    
    // Use CartoDB's Positron style for a minimal look
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(map.current);

    // Custom marker icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div class="w-6 h-6 rounded-full bg-primary shadow-lg flex items-center justify-center">
              <div class="w-3 h-3 rounded-full bg-white"></div>
            </div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    const marker = L.marker(coordinates, { icon: customIcon })
      .addTo(map.current)
      .bindPopup(`
        <div class="p-3 min-w-[200px]">
          <h3 class="font-medium text-sm mb-1">${shop.name}</h3>
          <p class="text-xs text-muted-foreground">${shop.address}</p>
        </div>
      `, {
        closeButton: false,
        className: 'modern-popup'
      });

    // Add custom styles to the document
    const style = document.createElement('style');
    style.textContent = `
      .custom-marker {
        transition: transform 0.2s;
      }
      .custom-marker:hover {
        transform: scale(1.1);
      }
      .modern-popup .leaflet-popup-content-wrapper {
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      }
      .modern-popup .leaflet-popup-tip {
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      }
      .modern-popup .leaflet-popup-content {
        margin: 0;
        line-height: 1.4;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (map.current) {
        map.current.remove();
      }
      document.head.removeChild(style);
    };
  }, [shop]);

  return (
    <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-border/50 shadow-sm">
      <div ref={mapContainer} className="w-full h-full bg-gray-50" />
    </div>
  );
}