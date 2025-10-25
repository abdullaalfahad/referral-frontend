import { RegisterForm } from "@/components/auth/register-form";

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const params = await searchParams;
  const ref = params?.ref;

  return <RegisterForm referralCode={ref} />;
}
