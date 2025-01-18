import { createFileRoute } from "@tanstack/react-router";
import BlogHome from "@/components/blogPage/blogHome";
import RootLayout from "../../layouts/RootLayout";
export const Route = createFileRoute("/blog/")({
  component: Blog,
});
function Blog() {
  return (
    <RootLayout>
      <main>
        <BlogHome />
      </main>
    </RootLayout>
  );
}
