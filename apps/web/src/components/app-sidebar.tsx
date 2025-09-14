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

export function AppSidebar() {
  const currentWorkspace = getCurrentWorkspace();
  const currentUser = getCurrentUser();

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
