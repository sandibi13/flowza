"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@flowza/ui/components/dropdown-menu";
import {
  ChevronsUpDownIcon,
  PlusCircleIcon,
  SettingsIcon,
  ShuffleIcon,
  Trash2Icon,
  UserPlusIcon,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@flowza/ui/components/sidebar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@flowza/ui/components/avatar";
import { WorkspaceSettingsDialog } from "./workspace-settings-dialog";
import { WorkspaceInviteDialog } from "./workspace-invite-dialog";
import { WorkspaceCreateDialog } from "./workspace-create-dialog";
import { useState } from "react";

export function WorkspaceDropdown({
  currentWorkspace,
}: {
  currentWorkspace: any;
}) {
  const { isMobile } = useSidebar();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isWorkspaceCreateDialogOpen, setIsWorkspaceCreateDialogOpen] =
    useState(false);
  const [isWorkspaceInviteDialogOpen, setIsWorkspaceInviteDialogOpen] =
    useState(false);
  const [isWorkspaceSettingsDialogOpen, setIsWorkspaceSettingsDialogOpen] =
    useState(false);

  const handleWorkspaceCreateClick = () => {
    setIsDropdownOpen(false);
    setTimeout(() => setIsWorkspaceCreateDialogOpen(true), 100);
  };
  const handleWorkspaceInviteClick = () => {
    setIsDropdownOpen(false);
    setTimeout(() => setIsWorkspaceInviteDialogOpen(true), 100);
  };
  const handleWorkspaceSettingsClick = () => {
    setIsDropdownOpen(false);
    setTimeout(() => setIsWorkspaceSettingsDialogOpen(true), 100);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={currentWorkspace.logo}
                  alt={currentWorkspace.name}
                />
                <AvatarFallback className="rounded-lg">
                  {currentWorkspace.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {currentWorkspace.name}
                </span>
                <span className="truncate text-xs">
                  {currentWorkspace.plan}
                </span>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="start"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleWorkspaceInviteClick}>
                <UserPlusIcon />
                Invite members
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleWorkspaceSettingsClick}>
                <SettingsIcon />
                Workspace settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleWorkspaceCreateClick}>
              <PlusCircleIcon />
              New workspace
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ShuffleIcon />
              Switch workspace
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Trash2Icon />
              Trash
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <WorkspaceCreateDialog
          open={isWorkspaceCreateDialogOpen}
          onOpenChange={setIsWorkspaceCreateDialogOpen}
        />
        <WorkspaceInviteDialog
          open={isWorkspaceInviteDialogOpen}
          onOpenChange={setIsWorkspaceInviteDialogOpen}
        />
        <WorkspaceSettingsDialog
          open={isWorkspaceSettingsDialogOpen}
          onOpenChange={setIsWorkspaceSettingsDialogOpen}
          currentWorkspace={currentWorkspace}
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
