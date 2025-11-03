import { pgTable, text, boolean, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";

export const profile = pgTable("profile", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  hasOnboarded: boolean("has_onboarded").default(false).notNull(),
  pushNotificationEnabled: boolean("push_notification_enabled")
    .default(false)
    .notNull(),
  notificationSummaryEnabled: boolean("notification_summary_enabled")
    .default(false)
    .notNull(),
  agentSummaryEnabled: boolean("agent_summary_enabled")
    .default(false)
    .notNull(),
  timezone: text("timezone"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
