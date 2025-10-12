"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@flowza/ui/components/popover";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@flowza/ui/components/sidebar";
import { Trash2Icon } from "lucide-react";

export function TrashPopover() {
  return (
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
  );
}
