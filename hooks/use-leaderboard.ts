import { useSuspenseQuery } from "@tanstack/react-query";
import api from "@/lib/xior";
import type { LeaderboardApiResponse } from "@/types/leaderboard";

export function useLeaderboard() {
  return useSuspenseQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      const res = await api.get<LeaderboardApiResponse>(
        "/api/referrals/leaderboard",
      );
      return res?.data?.leaderboard || [];
    },
  });
}
