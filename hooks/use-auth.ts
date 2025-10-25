import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";

export const useAuth = () => {
  const { token, setToken, logout } = useAuthStore();
  const router = useRouter();

  return {
    token,
    setToken,
    logout,
    isAuthenticated: !!token,
    redirectToDashboard: () => router.push("/dashboard"),
  };
};
