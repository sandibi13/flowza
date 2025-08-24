"use client";

import { DropdownMenuItem } from "@flowza/ui/components/dropdown-menu";
import { authClient } from "@flowza/auth/client";
import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";

export function Signout() {
  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/");
        },
      },
    });
  };

  return (
    <DropdownMenuItem onClick={signOut}>
      <LogOut />
      Signout
    </DropdownMenuItem>
  );
}
