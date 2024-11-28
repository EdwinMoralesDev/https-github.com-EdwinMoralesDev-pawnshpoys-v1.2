import { create } from 'zustand';
import { shops } from '@/components/shops/constants';

interface SearchStore {
  query: string;
  setQuery: (query: string) => void;
  filteredShops: typeof shops;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: '',
  setQuery: (query) => {
    set((state) => {
      const normalizedQuery = query.toLowerCase().trim();
      
      const filteredShops = normalizedQuery === '' 
        ? shops 
        : shops.filter((shop) => {
            const address = shop.address.toLowerCase();
            const name = shop.name.toLowerCase();
            return address.includes(normalizedQuery) || name.includes(normalizedQuery);
          });

      return {
        query,
        filteredShops,
      };
    });
  },
  filteredShops: shops,
}));