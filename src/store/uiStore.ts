import { create } from "zustand";

interface UIStore {
  isAuthRequiredOpen: boolean;
  authRequiredPath: string | null;

  isMobileMenuOpen: boolean;

  openAuthRequired: (path?: string) => void;
  closeAuthRequired: () => void;
  clearAuthRequiredPath: () => void;

  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;

  resetUI: () => void;
}

const initialUIState = {
  isAuthRequiredOpen: false,
  authRequiredPath: null,
  isMobileMenuOpen: false,
};

export const useUIStore = create<UIStore>((set) => ({
  ...initialUIState,

  openAuthRequired: (path) =>
    set({
      isAuthRequiredOpen: true,
      authRequiredPath: path ?? null,
      isMobileMenuOpen: false,
    }),

  closeAuthRequired: () =>
    set({
      isAuthRequiredOpen: false,
    }),

  clearAuthRequiredPath: () =>
    set({
      authRequiredPath: null,
    }),

  openMobileMenu: () =>
    set({
      isMobileMenuOpen: true,
    }),

  closeMobileMenu: () =>
    set({
      isMobileMenuOpen: false,
    }),

  toggleMobileMenu: () =>
    set((state) => ({
      isMobileMenuOpen: !state.isMobileMenuOpen,
    })),

  resetUI: () =>
    set({
      ...initialUIState,
    }),
}));