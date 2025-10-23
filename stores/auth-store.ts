import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { create } from "zustand";

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: (getCookie("accessToken") as string) || null,
  setToken: (token) => {
    if (token) setCookie("accessToken", token);
    else deleteCookie("accessToken");
    set({ token });
  },
  logout: () => {
    deleteCookie("accessToken");
    set({ token: null });
  },
}));
