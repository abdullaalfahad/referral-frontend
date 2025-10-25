import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return token
      ? NextResponse.redirect(new URL("/dashboard", req.url))
      : NextResponse.redirect(new URL("/login", req.url));
  }

  const isAuthRoute =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  const isProtectedRoute = [
    "/dashboard",
    "/referrals",
    "/purchase",
    "/leaderboard",
  ].some((route) => pathname.startsWith(route));

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/dashboard",
    "/referrals",
    "/purchase",
    "/leaderboard",
  ],
};
