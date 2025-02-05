import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import AdminLayout from "@/layouts/AdminLayout";
import { axiosClient } from "@/utils/endpoints";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/admin/posts/")({
  component: Posts,
});

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosClient.get("/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  function handleDelete(postId) {
    fetch(`/api/posts/${postId}`, { method: "DELETE" })
      .then(() => setPosts(posts.filter((p) => p.postId !== postId)))
      .catch((err) => console.error("Error deleting post:", err));
  }

  return (
    <AdminLayout>
      <Breadcrumb pageName="All Posts" />
      <div className="flex justify-end mb-4">
        <Link to="/admin/posts/addPost" className="btn btn-primary">
          Add New Post
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.postId} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.authorName}</p>
            <div className="mt-4 flex justify-between">
              <Link
                to={`/admin/posts/${post.postId}`}
                className="btn btn-sm btn-outline"
              >
                View/Edit
              </Link>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(post.postId)}
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
