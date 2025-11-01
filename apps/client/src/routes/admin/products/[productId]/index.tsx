// import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import AdminLayout from "@/components/layout/AdminLayout";
// import { axiosClient } from "@/utils/endpoints";
import {
  createFileRoute,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
// import { useState, useEffect } from "react";
// import { useQuill } from "react-quilljs";

// import "quill/dist/quill.snow.css";

export const Route = createFileRoute("/admin/products/productId/")({
  component: ViewProduct,
});

export default function ViewProduct() {
  // const { ProductId } = useParams();
  // const { quill, quillRef } = useQuill();
  // const navigate = useNavigate();

  // const [product, setProduct] = useState({});

  // const [range, setRange] = useState(null); // Fix for missing state

  // useEffect(() => {
  //   if (quill) {
  //     quill.clipboard.dangerouslyPasteHTML(product.description || "");
  //     quill.on("text-change", () => {
  //       setProduct((prev) => ({ ...prev, description: quill.root.innerHTML }));
  //     });
  //     quill.on("selection-change", (range) => setRange(range));
  //   }
  // }, [quill]);

  // useEffect(() => {
  //   const fetchproduct = async () => {
  //     try {
  //       const response = await axiosClient.get(`/api/products/${productId}`);
  //       setproduct(response.data);
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };
  //   fetchproduct();
  // }, [productId]);

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setProduct((prev) => ({ ...prev, [name]: value }));
  // }

  // async function handleUpdate(e) {
  //   e.preventDefault();
  //   try {
  //     await axiosClient.put(`/api/products/${productId}`, product);
  //     navigate({ to: "/admin/products" });
  //   } catch (error) {
  //     console.error("Error updating product:", error);
  //   }
  // }

  // if (!product) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <AdminLayout>
      {/* <Breadcrumb pageName="Edit Post" />

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="input w-full"
            required
          />
        </div>

        <div>
          <label>Author Name</label>
          <input
            type="text"
            name="authorName"
            value={product.authorName}
            onChange={handleChange}
            className="input w-full"
            required
          />
        </div>

        <div>
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="input w-full"
            required
          />
        </div>

        <div>
          <label>Product Content</label>
          <div className="border border-gray-300 rounded-lg min-h-[200px] bg-white p-3">
            <div ref={quillRef} className="min-h-[150px]" />
          </div>
        </div>

        <div>
          <label>External Link</label>
          <input
            type="url"
            name="href"
            value={product.href}
            onChange={handleChange}
            className="input w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Update Product
        </button>
      </form> */}
    </AdminLayout>
  );
}
