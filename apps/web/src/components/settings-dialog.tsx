"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@flowza/ui/components/sidebar";
import {
  BellIcon,
  CircleArrowUpIcon,
  CogIcon,
  Settings2Icon,
  SettingsIcon,
  UsersIcon,
  WorkflowIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@flowza/ui/components/dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@flowza/ui/components/avatar";
import { Skeleton } from "@flowza/ui/components/skeleton";
import { authClient } from "@flowza/auth/client";
import { useState } from "react";

export function SettingsDialog() {
  const [active, setActive] = useState("preferences");

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  return (
    <SidebarMenuItem>
      <Dialog>
        <DialogTrigger asChild>
          <SidebarMenuButton>
            <SettingsIcon />
            Settings
          </SidebarMenuButton>
        </DialogTrigger>
        <DialogContent className="overflow-hidden p-0 md:max-h-[450px] md:max-w-[650px] lg:max-w-[750px]">
          <DialogTitle className="sr-only">Settings</DialogTitle>
          <SidebarProvider className="items-start">
            <Sidebar collapsible="none" className="hidden md:flex">
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Account</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          className="overflow-hidden"
                          isActive={active === "profile"}
                          onClick={() => setActive("profile")}
                        >
                          {isPending ? (
                            <>
                              <Skeleton className="size-5 rounded-full" />
                              <Skeleton className="h-5 w-40" />
                            </>
                          ) : (
                            <>
                              <Avatar className="size-5">
                                <AvatarImage src={user?.image || undefined} />
                                <AvatarFallback>
                                  {user?.name.charAt(0).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <span className="max-w-40 truncate font-medium whitespace-nowrap">
                                {user?.name}
                              </span>
                            </>
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={active === "preferences"}
                          onClick={() => setActive("preferences")}
                        >
                          <Settings2Icon />
                          Preferences
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={active === "notifications"}
                          onClick={() => setActive("notifications")}
                        >
                          <BellIcon />
                          Notifications
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                  <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={active === "general"}
                          onClick={() => setActive("general")}
                        >
                          <CogIcon />
                          General
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={active === "people"}
                          onClick={() => setActive("people")}
                        >
                          <UsersIcon />
                          People
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={active === "connections"}
                          onClick={() => setActive("connections")}
                        >
                          <WorkflowIcon />
                          Connections
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={active === "upgrade-plan"}
                          onClick={() => setActive("upgrade-plan")}
                        >
                          <CircleArrowUpIcon />
                          Upgrade plan
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <main className="flex h-[350px] flex-1 flex-col overflow-hidden">
              Main
            </main>
          </SidebarProvider>
        </DialogContent>
      </Dialog>
    </SidebarMenuItem>
  );
}
