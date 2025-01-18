import { createFileRoute } from "@tanstack/react-router";
import RootLayout from "../../../layouts/RootLayout";
export const Route = createFileRoute("/blog/[slug]/")({
  component: IndexBlog,
});

function IndexBlog() {
  return (
    <RootLayout>
      <div>Hello /blog/[slug]/!</div>
    </RootLayout>
  );
}
