"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@flowza/ui/components/dialog";

interface BillingUpgradeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BillingUpgradeDialog({
  open,
  onOpenChange,
}: BillingUpgradeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
