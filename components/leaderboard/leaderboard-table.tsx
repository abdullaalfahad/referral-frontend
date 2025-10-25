import { Award, Crown, Medal, Trophy } from "lucide-react";
import { useLeaderboard } from "@/hooks/use-leaderboard";
import { getRankBadge, getRankIcon } from "@/lib/leaderboard-utils";
import { NoLeaderboard } from "./no-leaderboard";

export function LeaderboardTable() {
  const { data } = useLeaderboard();

  if (!data || data?.length === 0) {
    return <NoLeaderboard />;
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
      {data.length >= 3 && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 border-b border-gray-200">
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="text-center pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-2xl">
                {data[1]?.name?.charAt(0).toUpperCase() || "?"}
              </div>
              <Medal className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="font-bold text-gray-800">{data[1]?.name}</p>
              <p className="text-sm text-gray-600 mt-1">
                {data[1]?.credits} credits
              </p>
            </div>

            <div className="text-center">
              <Crown className="w-10 h-10 text-yellow-500 mx-auto mb-2 animate-bounce" />
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-3xl shadow-lg">
                {data[0]?.name?.charAt(0).toUpperCase() || "?"}
              </div>
              <p className="font-bold text-gray-800 text-lg">{data[0]?.name}</p>
              <p className="text-sm text-gray-600 mt-1 font-semibold">
                {data[0]?.credits} credits
              </p>
            </div>

            <div className="text-center pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-2xl">
                {data[2]?.name?.charAt(0).toUpperCase() || "?"}
              </div>
              <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="font-bold text-gray-800">{data[2]?.name}</p>
              <p className="text-sm text-gray-600 mt-1">
                {data[2]?.credits} credits
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                User
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Credits
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Referral Code
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index: number) => (
              <tr
                key={user._id}
                className={`border-b hover:bg-gray-50 transition-colors ${
                  index < 3 ? "bg-yellow-50/50" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {getRankIcon(index)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${getRankBadge(index)} rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {user.name?.charAt(0).toUpperCase() || "?"}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-gray-500 text-sm">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-semibold">
                      {user.credits}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-sm bg-gray-100 px-3 py-1 rounded-lg text-gray-700">
                    {user.referralCode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
