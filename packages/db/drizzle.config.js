import { env } from "@flowza/env/server";

/** @type {import("drizzle-kit").Config} */
const config = {
  dialect: "postgresql",
  schema: "./src/schema/root.ts",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
};

export default config;
