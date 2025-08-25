"use client";

import { Button } from "@flowza/ui/components/button";
import { Input } from "@flowza/ui/components/input";
import { authClient } from "@flowza/auth/client";
import { useState } from "react";

export function SignupForm() {
  const [loading, setLoading] = useState(false);

  const signUpWithDiscord = async () => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "/dashboard",
      fetchOptions: {
        onRequest: () => {
          setLoading(true);
        },
        onResponse: () => {
          setLoading(false);
        },
      },
    });
  };

  return (
    <form className="grid gap-6">
      <div className="grid gap-3">
        <Input type="email" placeholder="Email" required />
        <Button type="submit" className="w-full" disabled>
          Signup with Email
        </Button>
      </div>

      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or continue with
        </span>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={signUpWithDiscord}
        disabled={loading}
      >
        Signup with Discord
      </Button>
    </form>
  );
}
