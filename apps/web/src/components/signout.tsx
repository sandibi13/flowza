"use client";

import { Button } from "@flowza/ui/components/button";
import { authClient } from "@flowza/auth/client";
import { redirect } from "next/navigation";

export function SignOut() {
  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/signin");
        },
      },
    });
  };

  return <Button onClick={signOut}>Signout</Button>;
}
