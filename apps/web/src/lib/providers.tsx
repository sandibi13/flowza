"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "@flowza/ui/components/tooltip";
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
        <TooltipProvider>{children}</TooltipProvider>
      </TRPCReactProvider>
    </NextThemesProvider>
  );
}
