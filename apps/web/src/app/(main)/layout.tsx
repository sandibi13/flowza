import { SidebarInset } from "@flowza/ui/components/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Providers } from "../../lib/providers";
import { auth } from "@flowza/auth/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  return (
    <Providers>
      <AppSidebar />
      <SidebarInset className="flex items-center justify-center">
        {children}
      </SidebarInset>
    </Providers>
  );
}
