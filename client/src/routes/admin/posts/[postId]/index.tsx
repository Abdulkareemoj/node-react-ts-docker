import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import AdminLayout from "@/layouts/AdminLayout";
import { axiosClient } from "@/utils/endpoints";
import {
  createFileRoute,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css";

export const Route = createFileRoute("/admin/posts/[postId]/")({
  component: ViewPost,
});

export default function ViewPost() {
  const { postId } = useParams();
  const { quill, quillRef } = useQuill();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    authorName: "",
    href: "",
  });

  const [range, setRange] = useState(null); // Fix for missing state

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(post.description || "");
      quill.on("text-change", () => {
        setPost((prev) => ({ ...prev, description: quill.root.innerHTML }));
      });
      quill.on("selection-change", (range) => setRange(range));
    }
  }, [quill]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosClient.get(`/api/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [postId]);

  function handleChange(e) {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  }

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      await axiosClient.put(`/api/posts/${postId}`, post);
      navigate({ to: "/admin/posts" });
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }

  if (!post) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <AdminLayout>
      <Breadcrumb pageName="Edit Post" />

      <form onSubmit={handleUpdate} className="space-y-4">
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

        <div>
          <label>External Link</label>
          <input
            type="url"
            name="href"
            value={post.href}
            onChange={handleChange}
            className="input w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Update Post
        </button>
      </form>
    </AdminLayout>
  );
}
