import "server-only";

import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username, organization } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { env } from "@flowza/env/server";
import { betterAuth } from "better-auth";
import { db } from "@flowza/db/lib/db";

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
  plugins: [username(), organization(), nextCookies()],
});
