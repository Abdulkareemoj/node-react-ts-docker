import { createFileRoute } from "@tanstack/react-router";
import BlogHome from "../../components/blogHome";

export const Route = createFileRoute("/blog/")({
  component: Blog,
});
function Blog() {
  return (
    <main>
      <BlogHome />
    </main>
  );
}
