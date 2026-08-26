import { create } from "zustand";

interface UIStore {
  isAuthRequiredOpen: boolean;
  authRequiredPath: string | null;
  isMobileMenuOpen: boolean;

  openAuthRequired: (path?: string) => void;
  closeAuthRequired: () => void;
  clearAuthRequiredPath: () => void;

  setMobileMenuOpen: (isOpen: boolean) => void;
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

  setMobileMenuOpen: (isOpen) =>
    set({
      isMobileMenuOpen: isOpen,
      ...(isOpen
        ? {
            isAuthRequiredOpen: false,
          }
        : {}),
    }),

  openMobileMenu: () =>
    set({
      isMobileMenuOpen: true,
      isAuthRequiredOpen: false,
    }),

  closeMobileMenu: () =>
    set({
      isMobileMenuOpen: false,
    }),

  toggleMobileMenu: () =>
    set((state) => ({
      isMobileMenuOpen: !state.isMobileMenuOpen,
      ...(state.isMobileMenuOpen
        ? {}
        : {
            isAuthRequiredOpen: false,
          }),
    })),

  resetUI: () =>
    set({
      ...initialUIState,
    }),
}));