// import Breadcrumb from "@/components/admin/Breadcrumbs/Breadcrumb";
// import { useEffect, useState } from "react";
// import { useQuill } from "react-quilljs";

// import "quill/dist/quill.snow.css";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import AdminLayout from "@/components/layout/AdminLayout";
// import { axiosClient } from "@/utils/endpoints";

export const Route = createFileRoute("/admin/posts/addPost")({
  component: AddPost,
});

export default function AddPost() {
  //   const { quill, quillRef } = useQuill();
  //   const navigate = useNavigate();
  //   // const [range, setRange] = useState(null);
  //   const [post, setPost] = useState({
  //     title: "",
  //     content: "",
  //     image: "",
  //     authorName: "",
  //   });

  // useEffect(() => {
  //   if (quill) {
  //     // Set initial content using HTML string instead of Delta
  //     quill.clipboard.dangerouslyPasteHTML(`
  //       <h1>Hello</h1>
  //       <p>Some <strong>initial</strong> <u>content</u></p>
  //     `);

  //     // Handle text change
  //     quill.on("text-change", () => {
  //       setPost((prev) => ({ ...prev, content: quill.root.innerHTML }));
  //     });

  //     // Handle selection change
  //     quill.on("selection-change", (range) => {
  //       setRange(range);
  //     });
  //   }
  // }, [quill]);

  //   useEffect(() => {
  //     if (quill && post.content) {
  //       quill.clipboard.dangerouslyPasteHTML(post.content);
  //     }
  //   }, [quill, post.content]);

  //   function handleChange(e) {
  //     const { name, value } = e.target;
  //     setPost((prev) => ({ ...prev, [name]: value }));
  //   }

  //   async function handleSubmit(e) {
  //     e.preventDefault();
  //     try {
  //       await axiosClient.post("/api/posts", post);
  //       navigate({ to: "/admin/posts" });
  //     } catch (error: any) {
  //       console.error("Error creating post:", error);
  //       alert("Error creating post: " + error.message);
  //     }
  //   }

  return (
    <AdminLayout>
      <div>help</div>
      {/* <Breadcrumb pageName="Add Post" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
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
            value={post.authorName}
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
            value={post.image}
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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Create Post
        </button>
      </form> */}
    </AdminLayout>
  );
}
