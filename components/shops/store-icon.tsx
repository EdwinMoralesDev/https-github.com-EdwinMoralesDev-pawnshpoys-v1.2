"use client";

import { useEffect, useState } from "react";
import { storeIcons } from "./icons";
import { backgroundColors } from "./colors";
import { getRandomItem } from "./utils/random";
import { LucideIcon } from "lucide-react";

interface StoreIconProps {
  name: string;
  className?: string;
}

interface IconStyle {
  Icon: LucideIcon;
  bgColor: string;
  textColor: string;
}

export function StoreIcon({ name, className = "" }: StoreIconProps) {
  const [style, setStyle] = useState<IconStyle | null>(null);

  useEffect(() => {
    const selectedIcon = getRandomItem(storeIcons);
    const selectedColor = getRandomItem(backgroundColors);
    
    setStyle({
      Icon: selectedIcon.icon,
      bgColor: selectedColor.bg,
      textColor: selectedColor.text,
    });
  }, []);

  if (!style) return null;
  const { Icon, bgColor, textColor } = style;

  return (
    <div className={`${className} ${bgColor} rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105`}>
      <Icon className={`w-6 h-6 ${textColor}`} aria-label={name} />
    </div>
  );
}