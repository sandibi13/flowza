import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@flowza/ui/components/sidebar";
import { Box, Globe, Home, Search } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/home">
            <Home />
            Home
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/integrations">
            <Box />
            Integrations
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/templates">
            <Globe />
            Templates
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Search />
          Search
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
