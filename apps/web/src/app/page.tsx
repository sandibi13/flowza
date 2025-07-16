import { ModeToggle } from "../components/mode-toggle";

export default function IndexPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1>Flowza</h1>
        <ModeToggle />
      </div>
    </div>
  );
}
