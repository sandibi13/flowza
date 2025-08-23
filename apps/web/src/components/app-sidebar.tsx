import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@flowza/ui/components/sidebar";
import { UserAccount } from "./user-account";
import { Navigation } from "./navigation";

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader />
      <SidebarContent>
        <Navigation />
      </SidebarContent>
      <SidebarFooter>
        <UserAccount />
      </SidebarFooter>
    </Sidebar>
  );
}
