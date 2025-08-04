import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@flowza/api/lib/trpc";
import { appRouter } from "@flowza/api/routers/root";
import { env } from "@flowza/env/server";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createTRPCContext({ headers: req.headers }),
    onError:
      env.SERVER_NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `tRPC error on ${path ?? "<no-path>"}: ${error.message}`,
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST };
