import DashboardLayout from "@/layouts/DashboardLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/link-shortener")({
  component: () => (
    <DashboardLayout>
      <div>Hello /shortener/linksPage!</div>
    </DashboardLayout>
  ),
});
