"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@flowza/ui/components/dialog";
import { DropdownMenuItem } from "@flowza/ui/components/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export function PreferencesDialog() {
  const [isPreferencesDialogOpen, setIsPreferencesDialogOpen] = useState(false);

  return (
    <Dialog
      open={isPreferencesDialogOpen}
      onOpenChange={setIsPreferencesDialogOpen}
    >
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <SlidersHorizontal />
          Preferences
        </DropdownMenuItem>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Preferences</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
