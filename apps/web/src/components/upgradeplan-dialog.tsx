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
import { CircleArrowUp } from "lucide-react";
import { useState } from "react";

export function UpgradeplanDialog() {
  const [isUpgradeplanDialogOpen, setIsUpgradeplanDialogOpen] = useState(false);

  return (
    <Dialog
      open={isUpgradeplanDialogOpen}
      onOpenChange={setIsUpgradeplanDialogOpen}
    >
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <CircleArrowUp />
          Upgrade plan
        </DropdownMenuItem>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manage your plan</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
