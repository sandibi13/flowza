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

  const workspace = {
    name: "Analog",
    logo: "https://github.com/analogdotnow.png",
  };

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
          <SidebarMenuButton className="max-w-44 overflow-hidden">
            <Avatar className="size-5">
              <AvatarImage src={workspace.logo} />
              <AvatarFallback>
                {workspace.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="truncate font-medium whitespace-nowrap">
              {workspace.name}
            </span>
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
