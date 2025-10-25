import { AuthForm } from "../../../components/auth-form";
import Link from "next/link";

export default function SigninPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Signin to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to signin to your account
        </p>
      </div>
      <AuthForm mode="signin" />
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline underline-offset-4">
          Signup
        </Link>
      </div>
    </div>
  );
}
