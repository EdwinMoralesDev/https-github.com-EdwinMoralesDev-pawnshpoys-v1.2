import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Store } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" passHref>
            <Button variant="outline">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
          <Link href="/#pawnshops" passHref>
            <Button>
              <Store className="w-4 h-4 mr-2" />
              Browse Shops
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}