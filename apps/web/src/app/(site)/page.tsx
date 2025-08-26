import { Button } from "@flowza/ui/components/button";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex max-w-5xl flex-col items-center gap-3">
        <h1>
          Flowza is an open-source, AI-native workspace that unifies docs, chat,
          and agents together into one seamless platform
        </h1>

        <div className="flex flex-row gap-3">
          <Button asChild>
            <Link href="/signup">Signup</Link>
          </Button>

          <Button asChild>
            <Link href="/signin">Signin</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
