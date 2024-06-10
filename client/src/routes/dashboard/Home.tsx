import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/Home")({
  component: Home,
});
function Home() {
  return <div>Home</div>;
}
