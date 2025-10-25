export function ReferralsStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 animate-pulse"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-xl" />
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
              <div className="h-8 bg-gray-200 rounded w-16" />
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full" />
        </div>
      ))}
    </div>
  );
}

export function ReferralsListSkeleton() {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 animate-pulse">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div className="flex-1">
          <div className="h-5 bg-gray-200 rounded w-32 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-40" />
        </div>
      </div>
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-48" />
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
