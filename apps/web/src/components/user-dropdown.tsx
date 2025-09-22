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
  CircleArrowUpIcon,
  SlidersHorizontalIcon,
  UserIcon,
  UsersIcon,
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
import { UserPreferencesDialog } from "./user-preferences-dialog";
import { BillingUpgradeDialog } from "./billing-upgrade-dialog";
import { UserProfileDialog } from "./user-profile-dialog";
import { SignoutButton } from "./signout-button";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";

export function UserDropdown({ currentUser }: { currentUser: any }) {
  const { isMobile } = useSidebar();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserProfileDialogOpen, setIsUserProfileDialogOpen] = useState(false);
  const [isUserPreferencesDialogOpen, setIsUserPreferencesDialogOpen] =
    useState(false);
  const [isBillingUpgradeDialogOpen, setIsBillingUpgradeDialogOpen] =
    useState(false);

  const handleUserProfileClick = () => {
    setIsDropdownOpen(false);
    setTimeout(() => setIsUserProfileDialogOpen(true), 100);
  };
  const handleUserPreferencesClick = () => {
    setIsDropdownOpen(false);
    setTimeout(() => setIsUserPreferencesDialogOpen(true), 100);
  };
  const handleBillingUpgradeClick = () => {
    setIsDropdownOpen(false);
    setTimeout(() => setIsBillingUpgradeDialogOpen(true), 100);
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
                <AvatarImage src={currentUser.image} alt={currentUser.name} />
                <AvatarFallback className="rounded-lg">
                  {currentUser.displayUsername.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{currentUser.name}</span>
                <span className="truncate text-xs">{currentUser.email}</span>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleUserProfileClick}>
                <UserIcon />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleUserPreferencesClick}>
                <SlidersHorizontalIcon />
                Preferences
              </DropdownMenuItem>
              <ThemeToggle />
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UsersIcon />
              Switch Account
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleBillingUpgradeClick}>
              <CircleArrowUpIcon />
              Upgrade plan
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <SignoutButton />
          </DropdownMenuContent>
        </DropdownMenu>
        <UserProfileDialog
          open={isUserProfileDialogOpen}
          onOpenChange={setIsUserProfileDialogOpen}
          currentUser={currentUser}
        />
        <UserPreferencesDialog
          open={isUserPreferencesDialogOpen}
          onOpenChange={setIsUserPreferencesDialogOpen}
        />
        <BillingUpgradeDialog
          open={isBillingUpgradeDialogOpen}
          onOpenChange={setIsBillingUpgradeDialogOpen}
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
