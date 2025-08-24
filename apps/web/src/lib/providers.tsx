"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@flowza/ui/components/sidebar";
import { TRPCReactProvider } from "@flowza/api/client";
import * as React from "react";

export function Providers({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TRPCReactProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </TRPCReactProvider>
    </NextThemesProvider>
  );
}
