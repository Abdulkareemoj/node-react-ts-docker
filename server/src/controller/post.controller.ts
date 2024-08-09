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
  req: Request<{}, {}, createPostInput["body"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const body = req.body;

  const postData = {
    user: userId,
    title: body.title,
    description: body.description,
    image: body.image,
    authorName: body.authorName,
    href: body.href,
    timestamps: new Date(),
  };

  const post = await createPost(postData);
  return res.send(post);
}

export async function updatePostHandler(
  req: Request<updatePostInput["params"]>,
  res: Response
) {
  try {
    const userId = get(req, "user._id");
    if (!userId) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    const postId = get(req, "params.postId");
    const update = req.body;
    const post = await findPost({ postId });

    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }

    if (post.user !== userId) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    const updatedPost = await findAndUpdatePost({ postId }, update, {
      new: true,
    });

    return res.send(updatedPost);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
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

  if (post.user !== userId) {
    return res.sendStatus(403);
  }
  await deletePost({ postId });
  return res.sendStatus(200);
}
