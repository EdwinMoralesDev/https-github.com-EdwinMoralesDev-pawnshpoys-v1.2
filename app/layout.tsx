import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/components/navigation';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Florida Pawnshops Network | Best Rates & Instant Cash Loans',
  description: 'Licensed Florida pawnshops offering instant cash loans, jewelry buying, and great deals on electronics. Serving Tampa, Miami, Orlando, and Jacksonville. No credit check required.',
  keywords: 'Florida pawnshop, instant cash loans, jewelry buyer, pawn electronics, Tampa pawnshop, Miami pawnshop, no credit check loans',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-background pt-[60px] px-[12px]">{children}</main>
        <Toaster />
        <Script 
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}