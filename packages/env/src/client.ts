import "client-only";

import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "NEXT_PUBLIC_",
  client: {
    NEXT_PUBLIC_BETTER_AUTH_URL: z.url().optional(),
    NEXT_PUBLIC_CLIENT_NODE_ENV: z
      .enum(["development", "production"])
      .default("development"),
    NEXT_PUBLIC_VERCEL_URL: z.url().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    NEXT_PUBLIC_CLIENT_NODE_ENV: process.env.NEXT_PUBLIC_CLIENT_NODE_ENV,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
});
