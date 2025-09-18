"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@flowza/ui/components/dialog";
import { Button } from "@flowza/ui/components/button";
import { Label } from "@flowza/ui/components/label";
import { Input } from "@flowza/ui/components/input";
import { authClient } from "@flowza/auth/client";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface WorkspaceSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentWorkspace: any;
}

type WorkspaceSettingsFormValues = {
  workspaceName: string;
  workspaceSlug: string;
};

export function WorkspaceSettingsDialog({
  open,
  onOpenChange,
  currentWorkspace,
}: WorkspaceSettingsDialogProps) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<WorkspaceSettingsFormValues>({
    defaultValues: {
      workspaceName: currentWorkspace.name,
      workspaceSlug: currentWorkspace.slug,
    },
  });

  const checkWorkspaceSlugAvailability = async () => {
    await authClient.organization.checkSlug({
      slug: "workspace slug",
    });
  };

  const updateWorkspace = async (data: WorkspaceSettingsFormValues) => {
    try {
      setLoading(true);
      await authClient.organization.update({
        data: {
          name: data.workspaceName,
          slug: data.workspaceSlug,
        },
        organizationId: currentWorkspace.id,
      });
      toast.success("Workspace updated successfully.");
      onOpenChange(false);
    } catch {
      toast.error("Failed to update workspace. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit(updateWorkspace)}>
          <DialogHeader>
            <DialogTitle>Workspace settings</DialogTitle>
          </DialogHeader>
          <div className="my-3 grid gap-3">
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
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader className="size-4 animate-spin" />
              ) : (
                <span>Update</span>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
