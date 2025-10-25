"use client";

import { CheckCheck, Copy, Mail, User } from "lucide-react";
import { useState } from "react";
import { useDashboard } from "@/hooks/use-dashboard";

export function UserInfoCard() {
  const { data } = useDashboard();
  const [copied, setCopied] = useState(false);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(data?.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Profile Information
          </h2>
          <p className="text-sm text-gray-600">Your account details</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <User className="w-5 h-5 text-gray-400" />
          <div className="flex-1">
            <p className="text-xs text-gray-600 font-medium">Name</p>
            <p className="text-gray-800 font-semibold">{data?.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Mail className="w-5 h-5 text-gray-400" />
          <div className="flex-1">
            <p className="text-xs text-gray-600 font-medium">Email</p>
            <p className="text-gray-800 font-semibold">{data?.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
          <div className="flex-1">
            <p className="text-xs text-blue-700 font-medium mb-1">
              Your Referral Code
            </p>
            <p className="text-lg font-mono font-bold text-blue-900">
              {data?.referralCode}
            </p>
          </div>
          <button
            type="button"
            onClick={copyReferralCode}
            className="p-2 bg-white rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
          >
            {copied ? (
              <CheckCheck className="w-5 h-5 text-green-600" />
            ) : (
              <Copy className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
