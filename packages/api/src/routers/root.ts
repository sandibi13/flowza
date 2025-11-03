import { createTRPCRouter } from "../lib/trpc";
import { profileRouter } from "./profile";

export const appRouter = createTRPCRouter({
  profile: profileRouter,
});

export type AppRouter = typeof appRouter;
