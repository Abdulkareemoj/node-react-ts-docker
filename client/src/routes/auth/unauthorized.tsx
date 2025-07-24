import RootLayout from "@/components/layout/RootLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/unauthorized")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <RootLayout>
      <div>Hello "/shortener/unauthorized"!</div>{" "}
    </RootLayout>
  );
}
