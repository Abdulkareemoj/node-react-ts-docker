import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/About")({
  component: About,
});

function About() {
  return <div>About</div>;
}
