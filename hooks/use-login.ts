"use client";

import { useMutation } from "@tanstack/react-query";
import { LoginInput } from "@/schemas/login-schema";
import api from "@/lib/axios";
import { useAuth } from "@/hooks/use-auth";
import toast from "react-hot-toast";

export function useLogin() {
  const { setToken, redirectToDashboard } = useAuth();

  return useMutation({
    mutationFn: async (data: LoginInput) => {
      const res = await api.post("/api/auth/login", data);
      return res.data;
    },
    onSuccess: (data) => {
      setToken(data.token);
      toast.success("Login successful!");
      redirectToDashboard();
    },
    onError: (err: any) => {
      const message = err.response?.data?.message || "Invalid credentials";
      toast.error(message);
    },
  });
}
