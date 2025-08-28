"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@flowza/ui/components/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@flowza/ui/components/sidebar";
import {
  ChevronsUpDown,
  CircleArrowUp,
  SlidersHorizontal,
  User,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@flowza/ui/components/avatar";
import { UpgradeplanDialog } from "./upgradeplan-dialog";
import { PreferencesDialog } from "./preferences-dialog";
import { ProfileDialog } from "./profile-dialog";
import { createAvatar } from "@dicebear/core";
import { glass } from "@dicebear/collection";
import { ThemeToggle } from "./theme-toggle";
import { Signout } from "./signout";
import { useState } from "react";

export function UserAccount({ user }: { user: any }) {
  const { isMobile } = useSidebar();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [isPreferencesDialogOpen, setIsPreferencesDialogOpen] = useState(false);
  const [isUpgradeplanDialogOpen, setIsUpgradeplanDialogOpen] = useState(false);

  const dicebearSvg = createAvatar(glass, {
    seed: user.name,
  }).toDataUri();

  const handleProfileClick = () => {
    setIsDropdownOpen(false);
    setTimeout(() => setIsProfileDialogOpen(true), 100);
  };

  const handlePreferencesClick = () => {
    setIsDropdownOpen(false);
    setTimeout(() => setIsPreferencesDialogOpen(true), 100);
  };

  const handleUpgradeplanClick = () => {
    setIsDropdownOpen(false);
    setTimeout(() => setIsUpgradeplanDialogOpen(true), 100);
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
                <AvatarImage src={user.image || dicebearSvg} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                  {user.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={user.image || dicebearSvg}
                    alt={user.name}
                  />
                  <AvatarFallback className="rounded-lg">
                    {user.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleProfileClick}>
                <User />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handlePreferencesClick}>
                <SlidersHorizontal />
                Preferences
              </DropdownMenuItem>
              <ThemeToggle />
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleUpgradeplanClick}>
              <CircleArrowUp />
              Upgrade plan
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Signout />
          </DropdownMenuContent>
        </DropdownMenu>
        <ProfileDialog
          open={isProfileDialogOpen}
          onOpenChange={setIsProfileDialogOpen}
        />
        <PreferencesDialog
          open={isPreferencesDialogOpen}
          onOpenChange={setIsPreferencesDialogOpen}
        />
        <UpgradeplanDialog
          open={isUpgradeplanDialogOpen}
          onOpenChange={setIsUpgradeplanDialogOpen}
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
