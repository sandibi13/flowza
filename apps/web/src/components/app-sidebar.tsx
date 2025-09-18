import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@flowza/ui/components/sidebar";
import { WorkspaceDropdown } from "./workspace-dropdown";
import { getCurrentWorkspace } from "../dal/workspace";
import { UserDropdown } from "./user-dropdown";
import { getCurrentUser } from "../dal/user";
import { Navigation } from "./navigation";

export async function AppSidebar() {
  const currentWorkspace = await getCurrentWorkspace();
  const currentUser = await getCurrentUser();

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <WorkspaceDropdown currentWorkspace={currentWorkspace} />
      </SidebarHeader>
      <SidebarContent>
        <Navigation />
      </SidebarContent>
      <SidebarFooter>
        <UserDropdown currentUser={currentUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
