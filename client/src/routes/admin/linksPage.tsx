import DashboardLayout from "@/layouts/DashboardLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/linksPage")({
  component: () => (
    <DashboardLayout>
      <div>Hello /shortener/linksPage!</div>
    </DashboardLayout>
  ),
});
