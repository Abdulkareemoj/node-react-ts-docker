import { createFileRoute } from "@tanstack/react-router";
import BlogHome from "../../components/blogPage/blogHome";

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
