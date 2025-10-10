"use client";

import { Button } from "@flowza/ui/components/button";
import { Input } from "@flowza/ui/components/input";
import { authClient } from "@flowza/auth/client";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function SigninForm() {
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      newUserCallbackURL: "/onboarding",
      callbackURL: "/home",
      fetchOptions: {
        onRequest: () => {
          setLoading(true);
        },
        onError: () => {
          toast.error("Failed to sign in");
        },
        onResponse: () => {
          setLoading(false);
        },
      },
    });
  };

  return (
    <div className="grid gap-6">
      <form className="grid gap-3">
        <Input type="email" placeholder="Email" required />
        <Button type="submit" className="w-full" disabled>
          Signin with Email
        </Button>
      </form>

      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or continue with
        </span>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={signInWithGoogle}
        disabled={loading}
      >
        {loading ? (
          <LoaderIcon className="size-4 animate-spin" />
        ) : (
          <span>Signin with Google</span>
        )}
      </Button>
    </div>
  );
}
