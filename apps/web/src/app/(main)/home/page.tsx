import { getSession } from "../../../lib/dal";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getSession();

  if (!session?.session.userId) {
    redirect("/signin");
  }

  if (!session.session.activeOrganizationId) {
    redirect("/onboarding");
  }

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
