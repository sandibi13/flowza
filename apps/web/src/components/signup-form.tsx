"use client";

import { Button } from "@flowza/ui/components/button";
import { Input } from "@flowza/ui/components/input";
import { authClient } from "@flowza/auth/client";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function SignupForm() {
  const [loading, setLoading] = useState(false);

  const signUpWithGoogle = async () => {
    try {
      setLoading(true);
      await authClient.signIn.social({
        provider: "google",
        newUserCallbackURL: "/onboarding",
        callbackURL: "/home",
      });
      toast.success("Signed up successfully.");
    } catch {
      toast.error("Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-6">
      <form className="grid gap-3">
        <Input type="email" placeholder="Email" required />
        <Button type="submit" className="w-full" disabled>
          Signup with Email
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
        onClick={signUpWithGoogle}
        disabled={loading}
      >
        {loading ? (
          <LoaderIcon className="size-4 animate-spin" />
        ) : (
          <span>Signup with Google</span>
        )}
      </Button>
    </div>
  );
}
