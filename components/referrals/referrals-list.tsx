import { Calendar, CheckCircle, Clock, Mail, Users } from "lucide-react";
import { useMyReferrals } from "@/hooks/use-referrals";

export function ReferralsList() {
  const { data } = useMyReferrals();

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Referral List</h2>
          <p className="text-sm text-gray-600">People you've referred</p>
        </div>
      </div>

      {data.referrals && data.referrals.length > 0 ? (
        <div className="space-y-3">
          {data.referrals.map((referral) => (
            <div
              key={referral.email}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {referral.name?.charAt(0).toUpperCase() || "?"}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{referral.name}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      {referral.email}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(referral.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {referral.status === "converted" ? (
                    <span className="flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      Converted
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                      <Clock className="w-4 h-4" />
                      Pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-gray-600 font-medium">No referrals yet</p>
          <p className="text-sm text-gray-500 mt-1">
            Share your referral code to start earning rewards
          </p>
        </div>
      )}
    </div>
  );
}
