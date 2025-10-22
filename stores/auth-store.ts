import { create } from "zustand";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: (getCookie("token") as string) || null,
  setToken: (token) => {
    if (token) setCookie("token", token);
    else deleteCookie("token");
    set({ token });
  },
  logout: () => {
    deleteCookie("token");
    set({ token: null });
  },
}));
