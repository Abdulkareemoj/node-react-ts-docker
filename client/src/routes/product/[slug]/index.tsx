import { createFileRoute } from "@tanstack/react-router";
import RootLayout from "../../../layouts/RootLayout";
export const Route = createFileRoute("/product/[slug]/")({
  component: IndexProduct,
});

function IndexProduct() {
  return (
    <RootLayout>
      <div>Hello /product/[slug]/!</div>
    </RootLayout>
  );
}
