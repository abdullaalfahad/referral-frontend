import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import api from "@/lib/xior";

export function usePurchase() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (amount: number) => {
      const res = await api.post("/api/purchases", { amount });
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Purchase successful!");
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Purchase failed!");
    },
  });
}
