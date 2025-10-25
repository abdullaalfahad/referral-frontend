import { Trophy } from "lucide-react";

export function NoLeaderboard() {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-12 border border-gray-100 text-center">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Trophy className="w-10 h-10 text-gray-400" />
      </div>
      <p className="text-gray-600 font-medium">No leaderboard data yet</p>
      <p className="text-sm text-gray-500 mt-1">
        Be the first to start referring!
      </p>
    </div>
  );
}
