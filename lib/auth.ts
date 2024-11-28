import { create } from 'zustand';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'owner' | null;
};

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
};

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
}));