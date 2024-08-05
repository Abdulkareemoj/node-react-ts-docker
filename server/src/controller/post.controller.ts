import { Request, Response } from "express";
import { get } from "lodash-es";
import {
  createPost,
  findPost,
  findAndUpdatePost,
  deletePost,
} from "../service/post.service";
import {
  createPostInput,
  updatePostInput,
  readPostInput,
  deletePostInput,
} from "../schema/post.schema";

export async function createPostHandler(
  req: Request<createPostInput["body"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const body = req.body;

  const post = await createPost({ ...body, user: userId });
  return res.send(post);
}

export async function updatePostHandler(
  req: Request<updatePostInput["params"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const postId = get(req, "params.postId");
  const update = req.body;
  const post = await findPost({ postId });

  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.user) !== userId) {
    return res.sendStatus(401);
  }
  const updatedPost = await findAndUpdatePost({ postId }, update, {
    new: true,
  });
  return res.send(updatedPost);
}

export async function getPostHandler(
  req: Request<readPostInput["params"]>,
  res: Response
) {
  const postId = get(req, "params.postId");
  const post = await findPost({ postId });

  if (!post) {
    return res.sendStatus(404);
  }
  return res.send(post);
}

export async function deletePostHandler(
  req: Request<deletePostInput["params"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const postId = get(req, "params.postId");
  const post = await findPost({ postId });

  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.user) !== userId) {
    return res.sendStatus(401);
  }
  await deletePost({ postId });
  return res.sendStatus(200);
}
