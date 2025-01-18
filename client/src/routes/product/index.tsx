import { createFileRoute } from "@tanstack/react-router";
import ProductHome from "@/components/productPage/productHome";
import RootLayout from "@/layouts/RootLayout";

export const Route = createFileRoute("/product/")({
  component: Product,
});
function Product() {
  return (
    <RootLayout>
      <main>
        <ProductHome />
      </main>
    </RootLayout>
  );
}
