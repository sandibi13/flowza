import { SidebarInset, SidebarProvider } from "@flowza/ui/components/sidebar";
import { AppSidebar } from "../../components/app-sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex items-center justify-center">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
