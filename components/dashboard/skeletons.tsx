export function UserInfoSkeleton() {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 animate-pulse">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div className="flex-1">
          <div className="h-5 bg-gray-200 rounded w-40 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-32" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-16 bg-gray-100 rounded-lg" />
        <div className="h-16 bg-gray-100 rounded-lg" />
        <div className="h-20 bg-gray-100 rounded-lg" />
      </div>
    </div>
  );
}

export function ReferralStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 animate-pulse"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-xl" />
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
              <div className="h-8 bg-gray-200 rounded w-20" />
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full" />
        </div>
      ))}
    </div>
  );
}

export function CreditsSkeleton() {
  return (
    <div className="bg-gray-300 shadow-xl rounded-2xl p-6 animate-pulse h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gray-400 rounded-xl" />
        <div className="flex-1">
          <div className="h-4 bg-gray-400 rounded w-24 mb-2" />
          <div className="h-10 bg-gray-400 rounded w-32" />
        </div>
      </div>
      <div className="h-12 bg-gray-400 rounded-lg mt-6" />
    </div>
  );
}
