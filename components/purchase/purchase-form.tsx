"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  DollarSign,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { usePurchase } from "@/hooks/use-purchase";
import { type PurchaseInput, purchaseSchema } from "@/schemas/purchase-schema";

const PRESET_AMOUNTS = [
  { value: 10, label: "$10" },
  { value: 25, label: "$25", popular: true },
  { value: 50, label: "$50" },
  { value: 100, label: "$100", badge: "Best Value" },
];

export function PurchaseForm() {
  const [selectedPreset, setSelectedPreset] = useState<number>(25);
  const purchaseMutation = usePurchase();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PurchaseInput>({
    resolver: zodResolver(purchaseSchema),
    defaultValues: {
      amount: 25,
    },
  });

  const amount = watch("amount");

  const handlePresetSelect = (value: number) => {
    setSelectedPreset(value);
    setValue("amount", value, { shouldValidate: true });
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPreset(0);
    const value = parseFloat(e.target.value);
    setValue("amount", Number.isNaN(value) ? 0 : value, {
      shouldValidate: true,
    });
  };

  const onSubmit = (data: PurchaseInput) => {
    purchaseMutation.mutate(data.amount);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Purchase Amount</h2>
          <p className="text-sm text-gray-600">Select or enter an amount</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label
            htmlFor="preset-amounts"
            className="block text-gray-700 text-sm font-semibold mb-3"
          >
            Quick Select
          </label>
          <div className="grid grid-cols-2 gap-3">
            {PRESET_AMOUNTS.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => handlePresetSelect(preset.value)}
                className={`relative p-4 rounded-lg border-2 transition-all ${
                  selectedPreset === preset.value
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {preset.badge && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                    {preset.badge}
                  </span>
                )}
                {preset.popular && (
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                    Popular
                  </span>
                )}
                <div className="text-2xl font-bold text-gray-800">
                  {preset.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Custom Amount
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("amount", { valueAsNumber: true })}
              type="number"
              min={1}
              step="0.01"
              onChange={handleCustomAmountChange}
              placeholder="Enter custom amount"
              disabled={purchaseMutation.isPending}
              className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.amount
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-200 focus:border-blue-500"
              }`}
            />
          </div>
          {errors.amount && (
            <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.amount.message}</span>
            </div>
          )}
        </div>

        {amount > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-blue-200">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 font-medium">
                Total Amount
              </span>
              <span className="text-2xl font-bold text-blue-900">
                ${amount.toFixed(2)}
              </span>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={purchaseMutation.isPending || amount <= 0}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {purchaseMutation.isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>Complete Purchase</span>
            </>
          )}
        </button>
      </form>

      {purchaseMutation?.isSuccess && purchaseMutation?.data && (
        <div className="mt-6 bg-green-50 border-2 border-green-200 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-800">
                {purchaseMutation?.data?.message}
              </h3>
              <p className="text-sm text-green-700 mt-1">
                Amount: ${purchaseMutation?.data?.purchase?.amount?.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
