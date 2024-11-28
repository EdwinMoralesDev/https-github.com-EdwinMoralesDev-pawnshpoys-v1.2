"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

export function CategoryBadge({
  label,
  onClick,
  isActive = false,
}: CategoryBadgeProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "h-6 px-3 rounded-full text-xs font-medium transition-[transform,border-color,box-shadow]",
        isActive 
          ? "bg-black text-white hover:bg-black/90 hover:text-white" 
          : "hover:bg-black/10"
      )}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}