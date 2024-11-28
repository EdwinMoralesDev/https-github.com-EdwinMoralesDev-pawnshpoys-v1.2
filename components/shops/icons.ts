import { ShoppingBag, ShoppingCart, Tag, Store, Gift, Package, CreditCard, Wallet, Receipt } from "lucide-react";

export const storeIcons = [
  { icon: ShoppingBag, label: "Shopping Bag" },
  { icon: ShoppingCart, label: "Shopping Cart" },
  { icon: Tag, label: "Price Tag" },
  { icon: Store, label: "Store" },
  { icon: Gift, label: "Gift" },
  { icon: Package, label: "Package" },
  { icon: CreditCard, label: "Credit Card" },
  { icon: Wallet, label: "Wallet" },
  { icon: Receipt, label: "Receipt" },
] as const;