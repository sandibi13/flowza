"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@flowza/ui/components/sidebar";
import { authClient } from "@flowza/auth/client";
import { UserAccount } from "./user-account";

export function AppSidebar() {
  const { data } = authClient.useSession();

  if (!data) {
    return "No data found";
  }

  const user = data.user;

  return (
    <Sidebar variant="inset">
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter>
        <UserAccount user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
