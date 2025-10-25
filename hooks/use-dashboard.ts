import { useSuspenseQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

export function useDashboard() {
  return useSuspenseQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await api.get("/api/dashboard/summary");
      return res.data;
    },
  });
}
