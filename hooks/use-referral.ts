import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import api from "@/lib/axios";

export function useReferral() {
  return useMutation({
    mutationFn: async (code: string) => {
      const res = await api.post("/api/referrals/use", { code });
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Referral code applied!");
    },
    onError: (err: any) => {
      const msg = err.response?.data?.message || "Failed to apply referral";
      toast.error(msg);
    },
  });
}
