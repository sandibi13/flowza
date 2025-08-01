import "client-only";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCContext } from "@trpc/tanstack-react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { makeQueryClient } from "./lib/query-client";
import { AppRouter } from "./routers/root";
import { env } from "@flowza/env/client";
import { useState } from "react";

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();

let browserQueryClient: QueryClient;
function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

function getUrl() {
  const base = (() => {
    if (typeof window !== "undefined") return window.location.origin;
    if (env.NEXT_PUBLIC_VERCEL_URL)
      return `https://${env.NEXT_PUBLIC_VERCEL_URL}`;
    return "http://localhost:3000";
  })();
  return `${base}/api/trpc`;
}

export function TRPCReactProvider(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: getUrl(),
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {props.children}
      </TRPCProvider>
    </QueryClientProvider>
  );
}
