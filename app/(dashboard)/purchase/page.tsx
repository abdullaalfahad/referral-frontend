import { ShoppingBag } from "lucide-react";
import { PurchaseForm } from "@/components/purchase/purchase-form";

export default function PurchasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Purchase Credits
          </h1>
          <p className="text-gray-600 mt-2">
            Simulate a purchase to test reward logic
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <PurchaseForm />
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">How it Works</h2>
                <p className="text-sm text-blue-100">
                  Earn rewards with every purchase
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              <div className="p-3 bg-white/10 backdrop-blur rounded-lg">
                <p className="text-sm font-medium mb-1">🎁 Instant Rewards</p>
                <p className="text-xs text-blue-100">
                  Get credits immediately after purchase
                </p>
              </div>

              <div className="p-3 bg-white/10 backdrop-blur rounded-lg">
                <p className="text-sm font-medium mb-1">👥 Referral Bonus</p>
                <p className="text-xs text-blue-100">
                  Your referrer earns bonus credits too
                </p>
              </div>

              <div className="p-3 bg-white/10 backdrop-blur rounded-lg">
                <p className="text-sm font-medium mb-1">💰 Best Value</p>
                <p className="text-xs text-blue-100">
                  Higher amounts unlock better rewards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
