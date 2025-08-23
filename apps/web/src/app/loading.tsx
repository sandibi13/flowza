import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader className="size-4 animate-spin" />
    </div>
  );
}
