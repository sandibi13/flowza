import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@flowza/api/lib/trpc";
import { appRouter } from "@flowza/api/routers/root";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };
