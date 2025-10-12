"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@flowza/ui/components/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@flowza/ui/components/avatar";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@flowza/ui/components/sidebar";
import { ChevronDownIcon } from "lucide-react";

export function UserWorkspaceDropdown() {
  const workspace = {
    name: "Sandi's place",
    logo: "https://github.com/sandibi13.png",
  };

  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton>
            <Avatar className="size-6">
              <AvatarImage src={workspace.logo} />
              <AvatarFallback>
                {workspace.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="truncate font-medium">{workspace.name}</span>
            <ChevronDownIcon className="opacity-50" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" />
      </DropdownMenu>
    </SidebarMenuItem>
  );
}
