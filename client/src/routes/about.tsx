import RootLayout from "@/layouts/RootLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <RootLayout>
      <div>About</div>
    </RootLayout>
  );
}
