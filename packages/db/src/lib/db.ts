import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "@flowza/env/server";
import * as schema from "../schema/root";
import postgres from "postgres";

const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);
if (env.SERVER_NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema });
