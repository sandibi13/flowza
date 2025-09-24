import { pgTable, text, boolean, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";

export const preference = pgTable("preference", {
  id: text("id").primaryKey(),
  userId: text("user_id")
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
