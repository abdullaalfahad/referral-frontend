"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/use-auth";
import { useReferral } from "@/hooks/use-referrals";
import { useRegister } from "@/hooks/use-register";
import { type RegisterInput, registerSchema } from "@/schemas/register-schema";

export function RegisterForm({ referralCode }: { referralCode?: string }) {
  const [showPassword, setShowPassword] = useState(false);

  const { setToken, redirectToDashboard } = useAuth();

  const referralMutation = useReferral();

  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  const onSubmit = (data: RegisterInput) =>
    registerMutation.mutate(data, {
      onSuccess: async (res) => {
        setToken(res.token);
        if (referralCode) {
          await referralMutation.mutateAsync(referralCode);
        }
        redirectToDashboard();
      },
    });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-2xl rounded-2xl p-8"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Create Account
        </h2>
        <p className="text-gray-600">Join and start earning rewards!</p>
      </div>

      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="name"
            {...register("name")}
            type="text"
            placeholder="John Doe"
            disabled={registerMutation.isPending}
            className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none ${
              errors.name
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />
        </div>
        {errors.name && (
          <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.name.message}</span>
          </div>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="email"
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            disabled={registerMutation.isPending}
            className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none ${
              errors.email
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />
        </div>
        {errors.email && (
          <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.email.message}</span>
          </div>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="password"
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            disabled={registerMutation.isPending}
            className={`w-full pl-10 pr-12 py-3 border-2 rounded-lg focus:outline-none ${
              errors.password
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={registerMutation.isPending}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.password.message}</span>
          </div>
        )}
      </div>

      {referralCode && (
        <div className="mb-5 p-3 bg-purple-50 border border-purple-200 rounded-lg text-sm text-purple-700">
          Referred by code:{" "}
          <span className="font-semibold">{referralCode}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={registerMutation.isPending}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
      >
        {registerMutation.isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Creating account...</span>
          </>
        ) : (
          <span>Sign Up</span>
        )}
      </button>

      <div className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
}
