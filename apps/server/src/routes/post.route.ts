import {
  createPostSchema,
  deletePostSchema,
  getPostSchema,
  updatePostSchema,
} from "../schema/post.schema";
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  updatePostHandler,
} from "../controller/post.controller";

import { Router } from "express";

const router = Router();

router.post(
  "/api/posts",

  createPostHandler
);

router.put("/api/posts/:postId", updatePostHandler);

router.get("/api/posts/:postId", getPostHandler);

router.delete("/api/posts/:postId", deletePostHandler);
export default router;
