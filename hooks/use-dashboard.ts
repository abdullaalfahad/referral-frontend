import { useSuspenseQuery } from "@tanstack/react-query";
import api from "@/lib/xior";
import type { DashboardApiResponse } from "@/types/dashboard";

export function useDashboard() {
  return useSuspenseQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await api.get<DashboardApiResponse>("/api/dashboard/summary");
      return res.data;
    },
  });
}
