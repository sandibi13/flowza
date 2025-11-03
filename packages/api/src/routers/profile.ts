import { createTRPCRouter, privateProcedure } from "../lib/trpc";
import { profile } from "@flowza/db/schema/root";
import { TRPCError } from "@trpc/server";
import { db } from "@flowza/db/lib/db";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const profileRouter = createTRPCRouter({
  initializeProfile: privateProcedure
    .input(
      z.object({
        hasOnboarded: z.boolean(),
        timezone: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.userId;

      if (!userId) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "User not authenticated",
        });
      }

      const [initializedProfile] = await db
        .update(profile)
        .set({
          hasOnboarded: input.hasOnboarded,
          timezone: input.timezone,
        })
        .where(eq(profile.userId, userId))
        .returning();

      if (!initializedProfile) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Failed to initialize profile",
        });
      }

      return initializedProfile;
    }),
});
