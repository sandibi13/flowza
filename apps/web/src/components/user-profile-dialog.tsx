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

interface UserProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentUser: any;
}

type UserProfileFormValues = {
  fullname: string;
  displayUsername: string;
  username: string;
};

export function UserProfileDialog({
  open,
  onOpenChange,
  currentUser,
}: UserProfileDialogProps) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<UserProfileFormValues>({
    defaultValues: {
      fullname: currentUser.name,
      displayUsername: currentUser.displayUsername,
      username: currentUser.username,
    },
  });

  const checkUsernameAavailability = async () => {
    await authClient.isUsernameAvailable({
      username: "username",
    });
  };

  const updateUserProfile = async (data: UserProfileFormValues) => {
    try {
      setLoading(true);
      await authClient.updateUser({
        name: data.fullname,
        displayUsername: data.displayUsername,
        username: data.username,
      });
      toast.success("Profile updated successfully.");
      onOpenChange(false);
    } catch {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit(updateUserProfile)}>
          <DialogHeader>
            <DialogTitle>Profile</DialogTitle>
          </DialogHeader>
          <div className="my-3 grid gap-3">
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
