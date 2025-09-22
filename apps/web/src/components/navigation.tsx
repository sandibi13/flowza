"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@flowza/ui/components/sidebar";
import { BoxIcon, GlobeIcon, HomeIcon, SearchIcon } from "lucide-react";
import { CommandPalette } from "./command-palette";
import { useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [isCommandDialogOpen, setIsCommandDialogOpen] = useState(false);

  const navLinks = [
    { href: "/home", name: "Home", icon: HomeIcon },
    { href: "/integrations", name: "Integrations", icon: BoxIcon },
    { href: "/templates", name: "Templates", icon: GlobeIcon },
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
              <SearchIcon />
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
