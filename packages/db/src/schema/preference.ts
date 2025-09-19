import { pgTable, uuid, text, boolean, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";

export const preference = pgTable("preference", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  pushNotificationEnabled: boolean("push_notification_enabled")
    .default(false)
    .notNull(),
  notificationSummaryEnabled: boolean("notification_summary_enabled")
    .default(false)
    .notNull(),
  agentSummaryEnabled: boolean("agent_summary_enabled")
    .default(false)
    .notNull(),
  timezone: text("timezone").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
