import { env } from "@flowza/env/server";

/** @type {import("drizzle-kit").Config} */
const config = {
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  schema: "./src/schema/root.ts",
  out: "./migrations",
};

export default config;
