import { z } from "zod";

export const purchaseSchema = z.object({
  amount: z
    .number({ message: "Amount is required" })
    .min(1, "Amount must be at least $1")
    .max(10000, "Amount cannot exceed $10,000"),
});

export type PurchaseInput = z.infer<typeof purchaseSchema>;
