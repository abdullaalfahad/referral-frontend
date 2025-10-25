import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-purple-700 text-white flex-col justify-center items-center p-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Referral System</h1>
        <p className="text-lg text-blue-100 text-center max-w-md">
          Earn rewards and grow your network through simple referrals.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center p-6 sm:p-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
