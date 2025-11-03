CREATE TABLE "profile" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"has_onboarded" boolean DEFAULT false NOT NULL,
	"push_notification_enabled" boolean DEFAULT false NOT NULL,
	"notification_summary_enabled" boolean DEFAULT false NOT NULL,
	"agent_summary_enabled" boolean DEFAULT false NOT NULL,
	"timezone" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;