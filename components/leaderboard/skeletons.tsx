export function LeaderboardSkeleton() {
  return (
    <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 border-b border-gray-200">
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center pt-8">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2" />
              <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-2" />
              <div className="h-3 bg-gray-200 rounded w-16 mx-auto" />
            </div>
          ))}
        </div>
      </div>

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
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="border-b">
                <td className="px-6 py-4">
                  <div className="w-6 h-6 bg-gray-200 rounded" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
                      <div className="h-3 bg-gray-200 rounded w-40" />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded w-16" />
                </td>
                <td className="px-6 py-4">
                  <div className="h-6 bg-gray-200 rounded w-24" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
