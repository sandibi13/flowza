import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const waitlist = pgTable("waitlist", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text("email").notNull().unique(),
  joinedAt: timestamp("joined_at")
    .$defaultFn(() => new Date())
    .notNull(),
});
