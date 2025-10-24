"use client";

import { LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";

export function AppHeader() {
  const { logout } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="md:hidden flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-gray-200 relative">
      <h1 className="text-lg font-bold text-gray-800">ReferralApp</h1>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-lg z-50">
          <nav className="flex flex-col">
            <Link
              href="/dashboard"
              className="px-6 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/referrals"
              className="px-6 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Referrals
            </Link>
            <Link
              href="/purchase"
              className="px-6 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Purchase
            </Link>
            <Link
              href="/leaderboard"
              className="px-6 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="px-6 py-3 text-left text-red-600 hover:bg-gray-100"
            >
              <LogOut className="inline w-4 h-4 mr-2" /> Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
