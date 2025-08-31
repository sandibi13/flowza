import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@flowza/ui/components/sidebar";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { UserAccount } from "./user-account";
import { Navigation } from "./navigation";

export function AppSidebar() {
  const workspace = {
    name: "Analog",
    image: "https://github.com/analogdotnow.png",
    plan: "Free",
  };

  const user = {
    name: "Sandipan Biswas",
    image: "https://github.com/sandibi13.png",
    email: "sandipanb680@gmail.com",
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
