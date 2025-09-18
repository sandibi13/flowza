"use server";

import { user } from "@flowza/db/schema/root";
import { redirect } from "next/navigation";
import { db } from "@flowza/db/lib/db";
import { getSession } from "./session";
import { eq } from "drizzle-orm";

export const getCurrentUser = async () => {
  const session = await getSession();

  if (!session.user.username || !session.user.displayUsername) {
    redirect("/onboarding");
  }

  const currentUser = await db.query.user.findFirst({
    where: eq(user.id, session.user.id),
  });

  return currentUser;
};
