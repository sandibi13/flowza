"use client";

import { DropdownMenuItem } from "@flowza/ui/components/dropdown-menu";
import { authClient } from "@flowza/auth/client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

export function SignoutButton() {
  const router = useRouter();

  const signOut = async () => {
    try {
      await authClient.signOut();
      toast.success("Signed out successfully.");
      router.push("/");
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
