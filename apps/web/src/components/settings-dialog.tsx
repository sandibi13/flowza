"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@flowza/ui/components/dialog";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@flowza/ui/components/sidebar";
import { SettingsIcon } from "lucide-react";

export function SettingsDialog() {
  return (
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
  );
}
