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
        <DialogContent>
          <DialogTitle className="sr-only">Search</DialogTitle>
        </DialogContent>
      </Dialog>
    </SidebarMenuItem>
  );
}
