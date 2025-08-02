import "client-only";

import { createAuthClient } from "better-auth/react";
import { env } from "@flowza/env/client";

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_BETTER_AUTH_URL,
});
