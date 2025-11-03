"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@flowza/ui/components/field";
import { Spinner } from "@flowza/ui/components/spinner";
import { Button } from "@flowza/ui/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@flowza/ui/components/input";
import { useMutation } from "@tanstack/react-query";
import { authClient } from "@flowza/auth/client";
import { useTRPC } from "@flowza/api/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  fullname: z.string().min(2).max(40),
  displayName: z.string().min(2).max(20),
  username: z.string().min(3).max(30),
  workspaceName: z.string().min(2).max(40),
  workspaceSlug: z.string().min(3).max(30),
});

export function OnboardingForm() {
  const trpc = useTRPC();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      displayName: "",
      username: "",
      workspaceName: "",
      workspaceSlug: "",
    },
    mode: "onChange",
  });

  // const goBack = () => setCurrentStep((prev) => Math.max(1, prev - 1));
  const goNext = async () => {
    let fieldsToValidate: (keyof z.infer<typeof formSchema>)[] = [];

    if (currentStep === 1) {
      fieldsToValidate = ["fullname", "displayName", "username"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["workspaceName", "workspaceSlug"];
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(3, prev + 1));
    }
  };

  const initializeProfile = useMutation(
    trpc.profile.initializeProfile.mutationOptions(),
  );

  const completeOnboarding = async (values: z.infer<typeof formSchema>) => {
    try {
      await authClient.updateUser({
        name: values.fullname,
        displayUsername: values.displayName,
        username: values.username,
      });

      await authClient.organization.create({
        name: values.workspaceName,
        slug: values.workspaceSlug,
      });

      await initializeProfile.mutateAsync({
        hasOnboarded: true,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
      router.push("/home");
    } catch {
      toast.error("Failed to complete onboarding");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(completeOnboarding)}>
      {currentStep === 1 && (
        <FieldGroup>
          <Controller
            name="fullname"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Fullname</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Fullname"
                  required
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="displayName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Display name</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Display name"
                  required
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Username</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Username"
                  required
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Field>
            <Button type="button" onClick={goNext}>
              Next
            </Button>
          </Field>
        </FieldGroup>
      )}

      {currentStep === 2 && (
        <FieldGroup>
          <Controller
            name="workspaceName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Workspace name</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Workspace name"
                  required
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="workspaceSlug"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Workspace slug</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Workspace slug"
                  required
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Field>
            <Button type="button" onClick={goNext}>
              Next
            </Button>
          </Field>
        </FieldGroup>
      )}

      {currentStep === 3 && (
        <FieldGroup>
          <Field>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? <Spinner /> : <span>Finish</span>}
            </Button>
          </Field>
        </FieldGroup>
      )}
    </form>
  );
}
