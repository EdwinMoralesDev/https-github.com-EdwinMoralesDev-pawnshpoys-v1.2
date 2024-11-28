"use client";

import Link from "next/link";
import { Store } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Store className="h-6 w-6" />
      <span className="font-semibold text-lg hidden sm:inline-block">
        Florida Pawnshops
      </span>
    </Link>
  );
}