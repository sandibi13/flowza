"use client";

import { Button } from "@flowza/ui/components/button";
import { authClient } from "@flowza/auth/client";

export function SignUpForm() {
  const signUpWithDiscord = async () => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "/dashboard",
    });
  };

  return <Button onClick={signUpWithDiscord}>Signup with Discord</Button>;
}
