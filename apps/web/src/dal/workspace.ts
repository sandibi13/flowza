"use server";

import { organization } from "@flowza/db/schema/root";
import { redirect } from "next/navigation";
import { db } from "@flowza/db/lib/db";
import { getSession } from "./session";
import { eq } from "drizzle-orm";

export const getCurrentWorkspace = async () => {
  const session = await getSession();

  if (!session.session.activeOrganizationId) {
    redirect("/onboarding");
  }

  const currentWorkspace = await db.query.organization.findFirst({
    where: eq(organization.id, session.session.activeOrganizationId),
  });

  return currentWorkspace;
};
