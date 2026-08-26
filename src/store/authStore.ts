import { create } from "zustand";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthStore {
  user: AuthUser | null;

  isAuthenticated: boolean;
  isAuthLoading: boolean;

  setUser: (user: AuthUser | null) => void;
  setAuthLoading: (loading: boolean) => void;

  logout: () => void;
  resetAuth: () => void;
}

const initialAuthState = {
  user: null,
  isAuthenticated: false,
  isAuthLoading: false,
};

export const useAuthStore = create<AuthStore>((set) => ({
  ...initialAuthState,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: Boolean(user),
      isAuthLoading: false,
    }),

  setAuthLoading: (loading) =>
    set({
      isAuthLoading: loading,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      isAuthLoading: false,
    }),

  resetAuth: () =>
    set({
      ...initialAuthState,
    }),
}));