import { SignUpForm } from "../../../components/signup-form";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-xs">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Signup to your account</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Enter your email below to signup to your account
            </p>
          </div>
          <SignUpForm />
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/signin" className="underline underline-offset-4">
              Signin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
