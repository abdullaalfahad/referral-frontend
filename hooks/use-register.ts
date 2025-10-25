import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import api from "@/lib/xior";
import type { RegisterInput } from "@/schemas/register-schema";

export function useRegister() {
  return useMutation({
    mutationFn: async (data: RegisterInput) => {
      const res = await api.post("/api/auth/register", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Registration successful!");
    },
    onError: (err: any) => {
      const msg = err.response?.data?.message || "Registration failed";
      toast.error(msg);
    },
  });
}
