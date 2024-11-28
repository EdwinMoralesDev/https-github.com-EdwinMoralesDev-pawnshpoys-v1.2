"use client";

import { Logo } from "@/components/ui/logo";
import { UserMenu } from "@/components/ui/user-menu";

export function Navigation() {
  return (
    <header className="fixed top-0 z-[1000] w-full h-[60px] bg-background border-b">
      <div className="container h-full mx-auto px-4">
        <div className="flex h-full items-center justify-between">
          <Logo />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}