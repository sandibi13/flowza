"use client";

import { Button } from "@flowza/ui/components/button";
import { authClient } from "@flowza/auth/client";

export function SignInForm() {
  const signInWithDiscord = async () => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "/dashboard",
    });
  };

  return <Button onClick={signInWithDiscord}>Signin with Discord</Button>;
}
