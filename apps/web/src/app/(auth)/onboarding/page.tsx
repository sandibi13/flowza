import { OnboardingForm } from "../../../components/onboarding-form";
import { getSession } from "../../../lib/dal";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  const session = await getSession();

  if (!session?.session.userId) {
    redirect("/signin");
  }

  if (session.session.activeOrganizationId) {
    redirect("/home");
  }

  return (
    <div className="flex flex-col">
      <OnboardingForm />
    </div>
  );
}
