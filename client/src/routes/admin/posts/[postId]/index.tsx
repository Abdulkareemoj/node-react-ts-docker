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

export const Route = createFileRoute("/admin/posts/[postId]/")({
  component: ViewPost,
});

export default function ViewPost() {
  // const { postId } = useParams({ from: Route.id });
  // const { quill, quillRef } = useQuill();
  // const navigate = useNavigate();

  // const [post, setPost] = useState({
  //   title: "",
  //   content: "",
  //   image: "",
  //   authorName: "",
  // });
  // const [loading, setLoading] = useState(true);
  // const [range, setRange] = useState(null);

  // useEffect(() => {
  //   if (quill) {
  //     quill.clipboard.dangerouslyPasteHTML(post.content || "");
  //     quill.on("text-change", () => {
  //       setPost((prev) => ({ ...prev, content: quill.root.innerHTML }));
  //     });
  //     quill.on("selection-change", (range) => setRange(range));
  //   }
  // }, [quill]);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axiosClient.get(`/api/posts/${postId}`);
  //       setPost(response.data);
  //     } catch (error) {
  //       console.error("Error fetching post:", error);
  //       alert("Error fetching post: " + error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchPost();
  // }, [postId]);

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setPost((prev) => ({ ...prev, [name]: value }));
  // }

  // async function handleUpdate(e) {
  //   e.preventDefault();
  //   try {
  //     await axiosClient.put(`/api/posts/${postId}`, post);
  //     navigate({ to: "/admin/posts" });
  //   } catch (error: any) {
  //     console.error("Error creating post:", error);
  //     alert("Error creating post: " + error.message);
  //   }
  // }

  // if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  // if (!post)
  //   return <p className="text-center text-gray-500">Post not found.</p>;

  return (
    <AdminLayout>
      <div>help</div>
      {/* <Breadcrumb pageName="Edit Post" />

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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Update Post
        </button>
      </form> */}
    </AdminLayout>
  );
}
