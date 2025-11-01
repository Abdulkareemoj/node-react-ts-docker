import { TypeOf, z } from "zod";

const payload = {
  body: z.object({
    title: z.string({ message: "Title is required" }),
    content: z.string({ message: "Description is required" }).min(20),
    image: z
      .string({ message: "Image URL is required" })
      .url("Must be a valid URL"),
  }),
};
const params = {
  params: z.object({
    postId: z.string({ message: "postId required" }),
  }),
};

export const createPostSchema = z.object({
  ...payload,
});

export const updatePostSchema = z.object({
  ...params,
  ...payload,
});
export const getPostSchema = z.object({
  ...params,
  ...payload,
});

export const deletePostSchema = z.object({
  ...params,
});

export type createPostInput = TypeOf<typeof createPostSchema>;

export type updatePostInput = TypeOf<typeof updatePostSchema>;

export type readPostInput = TypeOf<typeof getPostSchema>;

export type deletePostInput = TypeOf<typeof deletePostSchema>;
