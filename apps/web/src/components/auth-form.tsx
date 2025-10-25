"use client";

import { Field, FieldGroup, FieldSeparator } from "@flowza/ui/components/field";
import { Spinner } from "@flowza/ui/components/spinner";
import { Button } from "@flowza/ui/components/button";
import { Input } from "@flowza/ui/components/input";
import { authClient } from "@flowza/auth/client";
import { useState } from "react";
import { toast } from "sonner";

export function AuthForm({
  mode = "add",
}: {
  mode?: "signup" | "signin" | "add";
}) {
  const [loading, setLoading] = useState(false);

  const labelMap = {
    signup: "Sign up",
    signin: "Sign in",
    add: "Continue",
  } as const;
  const label = labelMap[mode];

  const authWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      newUserCallbackURL: "/onboarding",
      callbackURL: "/home",
      fetchOptions: {
        onRequest: () => {
          setLoading(true);
        },
        onError: () => {
          toast.error(`Failed to ${label.toLowerCase} with google`);
        },
        onResponse: () => {
          setLoading(false);
        },
      },
    });
  };

  return (
    <form>
      <FieldGroup>
        <Field>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={authWithGoogle}
            disabled={loading}
          >
            {loading ? <Spinner /> : <span>{label} with Google</span>}
          </Button>
        </Field>
        <FieldSeparator>Or</FieldSeparator>
        <Field>
          <Input type="email" placeholder="Email" required />
          <Button type="submit" className="w-full" disabled>
            {label} with Email
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
