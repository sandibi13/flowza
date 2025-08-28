"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@flowza/ui/components/sidebar";
import { Box, Globe, Home, Search } from "lucide-react";
import { CommandPalette } from "./command-palette";
import { useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [isCommandDialogOpen, setIsCommandDialogOpen] = useState(false);

  return (
    <nav>
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
          <SidebarMenuButton onClick={() => setIsCommandDialogOpen(true)}>
            <Search />
            Search
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <CommandPalette
        open={isCommandDialogOpen}
        onOpenChange={setIsCommandDialogOpen}
      />
    </nav>
  );
}
