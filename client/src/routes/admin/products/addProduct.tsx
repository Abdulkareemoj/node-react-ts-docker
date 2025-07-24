// import { useNavigate } from "@tanstack/react-router";
// import Breadcrumb from "@/components/admin/Breadcrumbs/Breadcrumb";
// import { useEffect, useState } from "react";
// import { useQuill } from "react-quilljs";
// import { axiosClient } from "@/utils/endpoints";
import { createFileRoute } from "@tanstack/react-router";
import AdminLayout from "@/components/layout/AdminLayout";

export const Route = createFileRoute("/admin/products/addProduct")({
  component: AddProduct,
});
export default function AddProduct() {
  // const { quill, quillRef } = useQuill();
  // const navigate = useNavigate();
  // const [range, setRange] = useState(null);
  // const [product, setProduct] = useState({});

  // useEffect(() => {
  //   if (quill) {
  //     // Set initial content using HTML string instead of Delta
  //     quill.clipboard.dangerouslyPasteHTML(`
  //       <h1>Hello</h1>
  //       <p>Some <strong>initial</strong> <u>content</u></p>
  //     `);

  //     // Handle text change
  //     quill.on("text-change", () => {
  //       setProduct((prev) => ({ ...prev, description: quill.root.innerHTML }));
  //     });

  //     // Handle selection change
  //     quill.on("selection-change", (range) => {
  //       setRange(range);
  //     });
  //   }
  // }, [quill]);

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setProduct((prev) => ({ ...prev, [name]: value }));
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     await axiosClient.post("/api/products", product);
  //     navigate({ to: "/admin/products" });
  //   } catch (error) {
  //     console.error("Error creating product:", error);
  //   }
  // }

  return (
    <AdminLayout>
      {/* <Breadcrumb pageName="Add Products" />
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label>Post Content</label>
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
          Create Product
        </button>
      </form> */}
    </AdminLayout>
  );
}
