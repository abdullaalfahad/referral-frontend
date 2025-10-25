"use client";

import { UserCheck, Users } from "lucide-react";
import { useDashboard } from "@/hooks/use-dashboard";

export function ReferralStats() {
  const { data } = useDashboard();

  const conversionRate =
    data?.totalReferrals > 0
      ? ((data?.convertedReferrals / data?.totalReferrals) * 100).toFixed(1)
      : "0";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Total Referrals</p>
            <p className="text-3xl font-bold text-blue-700">
              {data?.totalReferrals}
            </p>
          </div>
        </div>
        <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
            style={{
              width: `${Math.min((data?.totalReferrals / 100) * 100, 100)}%`,
            }}
          />
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <UserCheck className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">
              Converted Referrals
            </p>
            <p className="text-3xl font-bold text-green-700">
              {data?.convertedReferrals}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-2 flex-1 bg-green-100 rounded-full overflow-hidden mr-3">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
              style={{ width: `${conversionRate}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-green-700">
            {conversionRate}%
          </span>
        </div>
      </div>
    </div>
  );
}
