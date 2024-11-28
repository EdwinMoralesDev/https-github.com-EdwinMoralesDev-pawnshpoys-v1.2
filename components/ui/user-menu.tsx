"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/auth/auth-modal";
import { StoreModal } from "@/components/auth/store-modal";

export function UserMenu() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showStoreModal, setShowStoreModal] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => setShowAuthModal(true)}
      >
        Sign In
      </Button>
      <Button 
        size="sm"
        onClick={() => setShowStoreModal(true)}
      >
        Register Store
      </Button>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
      <StoreModal 
        isOpen={showStoreModal} 
        onClose={() => setShowStoreModal(false)} 
      />
    </div>
  );
}