import "server-only";

import {
  createTRPCOptionsProxy,
  TRPCQueryOptions,
} from "@trpc/tanstack-react-query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { makeQueryClient } from "./lib/query-client";
import { createTRPCContext } from "./lib/trpc";
import { appRouter } from "./routers/root";
import { cache } from "react";

export const getQueryClient = cache(makeQueryClient);

export const trpc = createTRPCOptionsProxy({
  ctx: createTRPCContext,
  router: appRouter,
  queryClient: getQueryClient,
});

export function HydrateClient(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {props.children}
    </HydrationBoundary>
  );
}

export function prefetch<T extends ReturnType<TRPCQueryOptions<any>>>(
  queryOptions: T,
) {
  const queryClient = getQueryClient();
  if (queryOptions.queryKey[1]?.type === "infinite") {
    void queryClient.prefetchInfiniteQuery(queryOptions as any);
  } else {
    void queryClient.prefetchQuery(queryOptions);
  }
}
