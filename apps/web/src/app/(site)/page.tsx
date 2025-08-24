import { Button } from "@flowza/ui/components/button";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1>Index page</h1>

        <Button asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
