import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import AdminLayout from "@/layouts/AdminLayout";
import { axiosClient } from "@/utils/endpoints";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/admin/products/")({
  component: Products,
});

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosClient.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching Products:", error);
      }
    };

    fetchProducts();
  }, []);

  function handleDelete(productId) {
    fetch(`/api/products/${productId}`, { method: "DELETE" })
      .then(() =>
        setProducts(products.filter((p) => p.productId !== productId))
      )
      .catch((err) => console.error("Error deleting product:", err));
  }

  return (
    <AdminLayout>
      <Breadcrumb pageName="All Products" />
      <div className="flex justify-end mb-4">
        <Link to="/admin/products/addProduct" className="btn btn-primary">
          Add New product
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.productId}
            className="bg-white shadow-lg rounded-lg p-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.authorName}</p>
            <div className="mt-4 flex justify-between">
              <Link
                to={`/admin/products/${product.productId}`}
                className="btn btn-sm btn-outline"
              >
                View/Edit
              </Link>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(product.productId)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
