"use client";

import { DropdownMenuItem } from "@flowza/ui/components/dropdown-menu";
import { authClient } from "@flowza/auth/client";
import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";
import { toast } from "sonner";

export function SignoutButton() {
  const router = useRouter();

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
        onError: () => {
          toast.error("Failed to sign out");
        },
      },
    });
  };

  return (
    <DropdownMenuItem onClick={signOut}>
      <LogOutIcon />
      Signout
    </DropdownMenuItem>
  );
}
