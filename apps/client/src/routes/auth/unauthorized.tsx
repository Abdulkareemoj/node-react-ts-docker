import RootLayout from "@/components/layout/RootLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/unauthorized")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <RootLayout>
      <div className="bg-muted flex min-h-svh items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Unauthorized</h1>
          <p className="text-muted-foreground mt-2">You don&apos;t have access to view this page.</p>
        </div>
      </div>
    </RootLayout>
  );
}
