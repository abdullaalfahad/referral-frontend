import { Award, UserCheck, Users } from "lucide-react";
import { useMyReferrals } from "@/hooks/use-referrals";

export function ReferralsStats() {
  const { data } = useMyReferrals();

  const convertedCount =
    data.referrals?.filter((r) => r.status === "converted").length || 0;
  const conversionRate =
    data.totalReferrals > 0
      ? ((convertedCount / data.totalReferrals) * 100).toFixed(1)
      : "0";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Total Referrals</p>
            <p className="text-3xl font-bold text-blue-700">
              {data.totalReferrals || 0}
            </p>
          </div>
        </div>
        <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
            style={{
              width: `${Math.min((data.totalReferrals / 50) * 100, 100)}%`,
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
            <p className="text-sm text-gray-600 font-medium">Converted</p>
            <p className="text-3xl font-bold text-green-700">
              {convertedCount}
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

      <div className="bg-gradient-to-br from-purple-500 to-purple-700 shadow-xl rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-purple-100 font-medium">
              Credits Earned
            </p>
            <p className="text-3xl font-bold">{data.credits || 0}</p>
          </div>
        </div>
        <div className="mt-2 p-2 bg-white/10 backdrop-blur rounded-lg">
          <p className="text-xs text-purple-100">From referral rewards</p>
        </div>
      </div>
    </div>
  );
}
