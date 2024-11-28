"use client";

import React from "react";
import { categoryIcons } from "./constants";
import { getCategoryFromName } from "./utils";

interface CategoryIconProps {
  name: string;
}

export function CategoryIcon({ name }: CategoryIconProps) {
  const category = getCategoryFromName(name);
  const Icon = categoryIcons[category].icon;
  return <Icon className={`w-6 h-6 ${categoryIcons[category].iconColor}`} />;
}