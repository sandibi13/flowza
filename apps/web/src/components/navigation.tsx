"use client";

import {
  SidebarGroup,
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

  const navLinks = [
    { href: "/home", name: "Home", icon: Home },
    { href: "/integrations", name: "Integrations", icon: Box },
    { href: "/templates", name: "Templates", icon: Globe },
  ];

  return (
    <nav>
      <SidebarGroup>
        <SidebarMenu>
          {navLinks.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon />
                  {item.name}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => setIsCommandDialogOpen(true)}>
              <Search />
              Search
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <CommandPalette
        open={isCommandDialogOpen}
        onOpenChange={setIsCommandDialogOpen}
      />
    </nav>
  );
}
