import { SidebarInset } from "@flowza/ui/components/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { Providers } from "../../lib/providers";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <AppSidebar />
      <SidebarInset className="flex items-center justify-center">
        {children}
      </SidebarInset>
    </Providers>
  );
}
