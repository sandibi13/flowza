"use client";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@flowza/ui/components/command";
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
        <PopoverContent side="right" align="end" className="w-[350px] p-0">
          <Command>
            <CommandInput placeholder="Search trashed items..." />
            <CommandList>
              <CommandEmpty>No trashed items found</CommandEmpty>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </SidebarMenuItem>
  );
}
