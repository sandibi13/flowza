import { auth } from "@flowza/auth/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function NotFound() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  } else {
    redirect("/home");
  }
}
