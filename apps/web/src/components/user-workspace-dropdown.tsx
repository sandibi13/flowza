"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@flowza/ui/components/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@flowza/ui/components/dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@flowza/ui/components/avatar";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@flowza/ui/components/sidebar";
import { Skeleton } from "@flowza/ui/components/skeleton";
import { authClient } from "@flowza/auth/client";
import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function UserWorkspaceDropdown() {
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [addWorkspaceOpen, setAddWorkspaceOpen] = useState(false);
  const [addAccountOpen, setAddAccountOpen] = useState(false);

  const handleAddWorkspaceClick = () => {
    setDropdownOpen(false);
    setTimeout(() => setAddWorkspaceOpen(true), 100);
  };
  const handleAddAccountClick = () => {
    setDropdownOpen(false);
    setTimeout(() => setAddAccountOpen(true), 100);
  };

  const { data, isPending } = authClient.useActiveOrganization();
  const workspace = data;

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
        onError: () => {
          toast.error("Failed to sign out");
        },
      },
    });
  };

  return (
    <SidebarMenuItem>
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton className="overflow-hidden">
            {isPending ? (
              <>
                <Skeleton className="size-5 rounded-full" />
                <Skeleton className="h-5 w-32" />
              </>
            ) : (
              <>
                <Avatar className="size-5">
                  <AvatarImage src={workspace?.logo || undefined} />
                  <AvatarFallback>
                    {workspace?.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="max-w-32 truncate font-medium whitespace-nowrap">
                  {workspace?.name}
                </span>
              </>
            )}
            <ChevronDownIcon className="opacity-50" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-[250px]">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleAddWorkspaceClick}>
              Add workspace
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleAddAccountClick}>
              Add account
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={addWorkspaceOpen} onOpenChange={setAddWorkspaceOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add workspace</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={addAccountOpen} onOpenChange={setAddAccountOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add account</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </SidebarMenuItem>
  );
}
