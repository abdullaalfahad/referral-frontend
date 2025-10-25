"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorCard } from "@/components/dashboard/error-card";
import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table";
import { LeaderboardSkeleton } from "@/components/leaderboard/skeletons";

export function LeaderboardWrapper() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Top Referrers
        </h1>
        <p className="text-gray-600 mt-2">
          See who's leading the referral race
        </p>
      </div>

      <ErrorBoundary
        fallback={<ErrorCard message="Failed to load leaderboard" />}
      >
        <Suspense fallback={<LeaderboardSkeleton />}>
          <LeaderboardTable />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
