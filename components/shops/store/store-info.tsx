"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, CreditCard, Clock } from "lucide-react";
import { Shop } from "@/lib/types/shop";
import { StoreMap } from "@/components/map/store-map";

interface StoreInfoProps {
  shop: Shop;
}

export function StoreInfo({ shop }: StoreInfoProps) {
  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 shadow-sm border-border/50">
        <h2 className="font-semibold mb-4">About {shop.name}</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Licensed Florida pawnshop offering instant cash loans, jewelry buying, and great deals on electronics. Professional service with competitive rates.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Licensed Dealer</Badge>
          <Badge variant="secondary">Instant Cash</Badge>
          <Badge variant="secondary">Expert Appraisals</Badge>
        </div>
      </Card>

      <Card className="p-4 sm:p-6 shadow-sm border-border/50">
        <h2 className="font-semibold mb-4">Store Features</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-primary" />
            <div className="text-sm">Licensed & Insured</div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-4 h-4 text-primary" />
            <div className="text-sm">Expert Appraisals</div>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard className="w-4 h-4 text-primary" />
            <div className="text-sm">Instant Cash Loans</div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-primary" />
            <div className="text-sm">Same Day Service</div>
          </div>
        </div>
      </Card>

      <Card className="p-4 sm:p-6 shadow-sm border-border/50">
        <h2 className="font-semibold mb-4">Location</h2>
        <StoreMap shop={shop} />
      </Card>
    </div>
  );
}