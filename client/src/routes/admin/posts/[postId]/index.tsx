import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/posts/[postId]/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/admin/posts/[postId]/"!</div>;
}
