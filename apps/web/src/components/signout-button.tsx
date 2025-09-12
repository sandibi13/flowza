"use client";

import { DropdownMenuItem } from "@flowza/ui/components/dropdown-menu";
import { authClient } from "@flowza/auth/client";
import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

export function SignoutButton() {
  const signOut = async () => {
    try {
      await authClient.signOut();
      toast.success("Signed out successfully.");
      redirect("/");
    } catch {
      toast.error("Failed to sign out. Please try again.");
    }
  };

  return (
    <DropdownMenuItem onClick={signOut}>
      <LogOut />
      Signout
    </DropdownMenuItem>
  );
}
