import "server-only";

import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username, organization } from "better-auth/plugins";
import { profile, member } from "@flowza/db/schema/root";
import { nextCookies } from "better-auth/next-js";
import { env } from "@flowza/env/server";
import { betterAuth } from "better-auth";
import { db } from "@flowza/db/lib/db";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

async function getActiveOrganization(userId: string) {
  const userOrganization = await db
    .select({ organizationId: member.organizationId })
    .from(member)
    .where(eq(member.userId, userId))
    .limit(1);

  return userOrganization[0]?.organizationId || null;
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  databaseHooks: {
    session: {
      create: {
        before: async (session) => {
          const organizationId = await getActiveOrganization(session.userId);
          return {
            data: {
              ...session,
              activeOrganizationId: organizationId || null,
            },
          };
        },
      },
    },
    user: {
      create: {
        after: async (user) => {
          await db.insert(profile).values({ id: nanoid(), userId: user.id });
        },
      },
    },
  },
  advanced: {
    database: {
      generateId: () => {
        return nanoid();
      },
    },
  },
  plugins: [username(), organization(), nextCookies()],
});
