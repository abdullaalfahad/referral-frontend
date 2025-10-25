"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorCard } from "@/components/dashboard/error-card";
import { ReferralsList } from "@/components/referrals/referrals-list";
import { ReferralsStats } from "@/components/referrals/referrals-stats";
import {
  ReferralsListSkeleton,
  ReferralsStatsSkeleton,
} from "@/components/referrals/skeletons";

export function ReferralsWrapper() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Referrals
        </h1>
        <p className="text-gray-600 mt-2">Track your referrals and earnings</p>
      </div>

      <div className="mb-6">
        <ErrorBoundary
          fallback={<ErrorCard message="Failed to load referral statistics" />}
        >
          <Suspense fallback={<ReferralsStatsSkeleton />}>
            <ReferralsStats />
          </Suspense>
        </ErrorBoundary>
      </div>

      <div>
        <ErrorBoundary
          fallback={<ErrorCard message="Failed to load referrals list" />}
        >
          <Suspense fallback={<ReferralsListSkeleton />}>
            <ReferralsList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
