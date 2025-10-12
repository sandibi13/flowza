"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@flowza/ui/components/sidebar";
import {
  HelpCircleIcon,
  HomeIcon,
  InboxIcon,
  LeafIcon,
  PackageOpenIcon,
  PanelLeftIcon,
  PlusIcon,
  ShapesIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@flowza/ui/components/tooltip";
import {
  Collapsible,
  CollapsibleTrigger,
} from "@flowza/ui/components/collapsible";
import { UserWorkspaceDropdown } from "./user-workspace-dropdown";
import { SettingsDialog } from "./settings-dialog";
import { TrashPopover } from "./trash-popover";
import { SearchDialog } from "./search-dialog";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <SidebarMenu className="flex flex-row justify-between">
          <UserWorkspaceDropdown />
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={toggleSidebar}
              tooltip={{
                children: "Toggle sidebar",
                hidden: false,
                side: "bottom",
              }}
            >
              <PanelLeftIcon />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SearchDialog />
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/home"}>
              <Link href="/home">
                <HomeIcon />
                Home
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <InboxIcon />
              Inbox
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>Shared</CollapsibleTrigger>
            </SidebarGroupLabel>
            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarGroupAction>
                  <PlusIcon />
                </SidebarGroupAction>
              </TooltipTrigger>
              <TooltipContent side="right">New shared agent</TooltipContent>
            </Tooltip>
          </SidebarGroup>
        </Collapsible>
        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>Private</CollapsibleTrigger>
            </SidebarGroupLabel>
            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarGroupAction>
                  <PlusIcon />
                </SidebarGroupAction>
              </TooltipTrigger>
              <TooltipContent side="right">New private agent</TooltipContent>
            </Tooltip>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SettingsDialog />
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/templates"}>
              <Link href="/templates">
                <ShapesIcon />
                Templates
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <TrashPopover />
        </SidebarMenu>
        <SidebarMenu className="flex flex-row justify-between">
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: "Download desktop app",
                hidden: false,
                side: "top",
              }}
            >
              <LeafIcon />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <div className="flex flex-row justify-between">
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={{
                  children: "View changelog",
                  hidden: false,
                  side: "top",
                }}
              >
                <PackageOpenIcon />
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={{
                  children: "Help & support",
                  hidden: false,
                  side: "top",
                }}
              >
                <HelpCircleIcon />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </div>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
