import { auth } from "@flowza/auth/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen flex-1 items-center justify-center">
      <div className="w-full max-w-xs">{children}</div>
    </div>
  );
}
