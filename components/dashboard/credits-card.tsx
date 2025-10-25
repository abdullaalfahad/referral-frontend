"use client";

import { Coins } from "lucide-react";
import { useDashboard } from "@/hooks/use-dashboard";

export function CreditsCard() {
  const { data } = useDashboard();

  return (
    <div className="bg-gradient-to-br from-purple-500 to-purple-700 shadow-xl rounded-2xl p-6 text-white h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
          <Coins className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-sm text-purple-100 font-medium">Total Credits</p>
          <p className="text-4xl font-bold">{data?.credits}</p>
        </div>
      </div>
      <div className="mt-6 p-3 bg-white/10 backdrop-blur rounded-lg">
        <p className="text-xs text-purple-100">
          Credits can be used for premium features and rewards
        </p>
      </div>
    </div>
  );
}
