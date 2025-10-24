"use client";

import {
  LayoutDashboard,
  LogOut,
  ShoppingBag,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/referrals", label: "Referrals", icon: Users },
  { href: "/purchase", label: "Purchase", icon: ShoppingBag },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gradient-to-b from-blue-600 to-purple-700 text-white">
      <div className="px-6 py-6 text-2xl font-bold border-b border-white/20">
        ReferralApp
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {navLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
              pathname === href
                ? "bg-white/20 text-white font-semibold"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        onClick={handleLogout}
        className="m-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
      >
        <LogOut className="w-4 h-4" /> Logout
      </button>
    </aside>
  );
}
