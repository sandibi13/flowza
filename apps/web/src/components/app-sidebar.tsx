import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@flowza/ui/components/sidebar";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { UserAccount } from "./user-account";
import { Navigation } from "./navigation";

export function AppSidebar({ session }: { session: any }) {
  const user = session.user;

  const workspace = {
    name: "Analog",
    image: "https://github.com/analogdotnow.png",
    plan: "Free",
  };

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <WorkspaceSwitcher workspace={workspace} />
      </SidebarHeader>
      <SidebarContent>
        <Navigation />
      </SidebarContent>
      <SidebarFooter>
        <UserAccount user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
