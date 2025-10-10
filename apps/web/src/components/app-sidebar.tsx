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
  ChevronDownIcon,
  HelpCircleIcon,
  HomeIcon,
  InboxIcon,
  LeafIcon,
  PackageOpenIcon,
  PanelLeftIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShapesIcon,
  Trash2Icon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@flowza/ui/components/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@flowza/ui/components/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@flowza/ui/components/popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@flowza/ui/components/avatar";
import {
  Collapsible,
  CollapsibleTrigger,
} from "@flowza/ui/components/collapsible";
import { usePathname } from "next/navigation";
import Link from "next/link";

const workspace = {
  name: "Sandipan's",
  logo: "https://github.com/sandibi13.png",
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <SidebarMenu className="flex flex-row justify-between">
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

          <SidebarMenuItem>
            <SidebarMenuButton onClick={toggleSidebar}>
              <PanelLeftIcon />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarMenuItem>
            <Dialog>
              <DialogTrigger asChild>
                <SidebarMenuButton>
                  <SearchIcon />
                  Search
                </SidebarMenuButton>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="sr-only">Search</DialogTitle>
              </DialogContent>
            </Dialog>
          </SidebarMenuItem>
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
              <CollapsibleTrigger>Team</CollapsibleTrigger>
            </SidebarGroupLabel>
            <SidebarGroupAction>
              <PlusIcon />
            </SidebarGroupAction>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>Private</CollapsibleTrigger>
            </SidebarGroupLabel>
            <SidebarGroupAction>
              <PlusIcon />
            </SidebarGroupAction>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Dialog>
              <DialogTrigger asChild>
                <SidebarMenuButton>
                  <SettingsIcon />
                  Settings
                </SidebarMenuButton>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="sr-only">Settings</DialogTitle>
              </DialogContent>
            </Dialog>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/templates"}>
              <Link href="/templates">
                <ShapesIcon />
                Templates
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Popover>
              <PopoverTrigger asChild>
                <SidebarMenuButton>
                  <Trash2Icon />
                  Trash
                </SidebarMenuButton>
              </PopoverTrigger>
              <PopoverContent side="right" />
            </Popover>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu className="flex flex-row justify-between">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <LeafIcon />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <div className="flex flex-row justify-between">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  target="_blank"
                  href="https://github.com/sandibi13/flowza.git"
                >
                  <PackageOpenIcon />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  target="_blank"
                  href="https://github.com/sandibi13/flowza.git"
                >
                  <HelpCircleIcon />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </div>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
