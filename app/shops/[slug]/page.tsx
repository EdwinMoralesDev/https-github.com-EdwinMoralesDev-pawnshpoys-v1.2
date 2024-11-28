import { Metadata } from "next";
import { shops } from "@/components/shops/constants";
import { StoreHeader } from "@/components/shops/store/store-header";
import { StoreProducts } from "@/components/shops/store/store-products";
import { StoreInfo } from "@/components/shops/store/store-info";
import { notFound } from "next/navigation";
import { createSlug, getShopBySlug } from "@/lib/utils/slugs";

interface ShopPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ShopPageProps): Promise<Metadata> {
  const shop = getShopBySlug(shops, params.slug);
  
  if (!shop) {
    return {
      title: "Shop Not Found",
      description: "The requested pawnshop could not be found.",
    };
  }

  return {
    title: `${shop.name} | Florida Pawnshops Network`,
    description: `Visit ${shop.name} for instant cash loans, jewelry buying, and great deals on electronics. Located at ${shop.address}.`,
  };
}

export function generateStaticParams() {
  return shops.map((shop) => ({
    slug: createSlug(shop.name),
  }));
}

export default function ShopPage({ params }: ShopPageProps) {
  const shop = getShopBySlug(shops, params.slug);

  if (!shop) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <StoreHeader shop={shop} />
      <main className="container mx-auto p-4">
        <div className="grid gap-6 lg:grid-cols-[1fr,320px]">
          <StoreProducts shop={shop} />
          <div className="space-y-6">
            <StoreInfo shop={shop} />
          </div>
        </div>
      </main>
    </div>
  );
}