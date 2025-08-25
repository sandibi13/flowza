import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@flowza/ui/components/sidebar";
import { UserAccount } from "./user-account";
import { Navigation } from "./navigation";

export function AppSidebar({ session }: { session: any }) {
  const user = session.user;

  return (
    <Sidebar variant="inset">
      <SidebarHeader />
      <SidebarContent>
        <Navigation />
      </SidebarContent>
      <SidebarFooter>
        <UserAccount user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
