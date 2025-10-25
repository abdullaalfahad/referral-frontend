"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CreditsCard } from "@/components/dashboard/credits-card";
import { ReferralStats } from "@/components/dashboard/referral-stats";
import {
  CreditsSkeleton,
  ReferralStatsSkeleton,
  UserInfoSkeleton,
} from "@/components/dashboard/skeletons";
import { UserInfoCard } from "@/components/dashboard/user-info-card";
import { ErrorCard } from "./error-card";

export function DashboardWrapper() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your overview</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ErrorBoundary
            fallback={<ErrorCard message="Failed to load user information" />}
          >
            <Suspense fallback={<UserInfoSkeleton />}>
              <UserInfoCard />
            </Suspense>
          </ErrorBoundary>
        </div>

        <div className="lg:col-span-1">
          <ErrorBoundary
            fallback={<ErrorCard message="Failed to load credits" />}
          >
            <Suspense fallback={<CreditsSkeleton />}>
              <CreditsCard />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>

      <div className="mt-6">
        <ErrorBoundary
          fallback={<ErrorCard message="Failed to load referral statistics" />}
        >
          <Suspense fallback={<ReferralStatsSkeleton />}>
            <ReferralStats />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
