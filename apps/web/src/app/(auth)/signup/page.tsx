import { AuthForm } from "../../../components/auth-form";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Signup to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to signup to your account
        </p>
      </div>
      <AuthForm mode="signup" />
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/signin" className="underline underline-offset-4">
          Signin
        </Link>
      </div>
    </div>
  );
}
