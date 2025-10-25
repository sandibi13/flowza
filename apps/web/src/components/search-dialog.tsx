"use client";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@flowza/ui/components/command";
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
import { SearchIcon } from "lucide-react";

export function SearchDialog() {
  return (
    <SidebarMenuItem>
      <Dialog>
        <DialogTrigger asChild>
          <SidebarMenuButton>
            <SearchIcon />
            Search
          </SidebarMenuButton>
        </DialogTrigger>
        <DialogContent
          className="w-[550px] overflow-hidden p-0"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Search</DialogTitle>
          <Command>
            <CommandInput placeholder="Search agents, templates, or anything..." />
            <CommandList>
              <CommandEmpty>No matches found</CommandEmpty>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </SidebarMenuItem>
  );
}
