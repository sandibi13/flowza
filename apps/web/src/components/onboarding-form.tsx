"use client";

import { Button } from "@flowza/ui/components/button";
import { Label } from "@flowza/ui/components/label";
import { Input } from "@flowza/ui/components/input";
import { ChevronLeft, Loader } from "lucide-react";
import { authClient } from "@flowza/auth/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";

type OnboardingFormValues = {
  fullname: string;
  displayUsername: string;
  username: string;
  workspaceName: string;
  workspaceSlug: string;
};

export function OnboardingForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<OnboardingFormValues>();

  const goBack = () => setCurrentStep((prev) => Math.max(1, prev - 1));
  const goFore = () => setCurrentStep((prev) => Math.min(3, prev + 1));

  const checkUsernameAavailability = async () => {
    await authClient.isUsernameAvailable({
      username: "username",
    });
  };

  const checkWorkspaceSlugAvailability = async () => {
    await authClient.organization.checkSlug({
      slug: "workspace slug",
    });
  };

  const completeOnboarding = async (data: OnboardingFormValues) => {
    try {
      setLoading(true);
      await authClient.updateUser({
        name: data.fullname,
        displayUsername: data.displayUsername,
        username: data.username,
      });

      await authClient.organization.create({
        name: data.workspaceName,
        slug: data.workspaceSlug,
      });

      toast.success("Onboarding completed successfully.");
      router.push("/home");
    } catch {
      toast.error("Failed to complete onboarding. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {currentStep > 1 && (
        <Button onClick={goBack}>
          <ChevronLeft className="size-4" />
        </Button>
      )}

      <form onSubmit={handleSubmit(completeOnboarding)}>
        {currentStep === 1 && (
          <div className="grid gap-4">
            <Label>Fullname</Label>
            <Input
              placeholder="Fullname"
              {...register("fullname", { required: true })}
            />

            <Label>Display name</Label>
            <Input
              placeholder="Display name"
              {...register("displayUsername", { required: true })}
            />

            <Label>Username</Label>
            <Input
              placeholder="Username"
              {...register("username", { required: true })}
            />

            <Button type="button" onClick={goFore}>
              Continue
            </Button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid gap-4">
            <Label>Workspace name</Label>
            <Input
              placeholder="Workspace name"
              {...register("workspaceName", { required: true })}
            />

            <Label>Workspace slug</Label>
            <Input
              placeholder="Workspace slug"
              {...register("workspaceSlug", { required: true })}
            />

            <Button type="button" onClick={goFore}>
              Continue
            </Button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="grid gap-4">
            <h1>Step 3</h1>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader className="size-4 animate-spin" />
              ) : (
                <span>Continue</span>
              )}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
