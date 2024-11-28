import { Shop } from "@/lib/types/shop";

export function createSlug(text: string): string {
  if (!text) return "";
  
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getShopBySlug(shops: Shop[], slug: string): Shop | undefined {
  if (!slug) return undefined;
  
  return shops.find((shop) => createSlug(shop.name) === slug);
}