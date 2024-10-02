import { createFileRoute } from "@tanstack/react-router";
import ProductHome from "@/components/productPage/productHome";

export const Route = createFileRoute("/product/")({
  component: Product,
});
function Product() {
  return (
    <main>
      <ProductHome />
    </main>
  );
}
