import { create } from 'zustand';

interface AppState {
  isLoading: boolean;
  isMobileMenuOpen: boolean;
  setIsLoading: (loading: boolean) => void;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLoading: true,
  isMobileMenuOpen: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  setIsMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}));