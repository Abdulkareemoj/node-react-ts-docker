import { TypeOf, z } from "zod";

const payload = {
  body: z.object({
    title: z.string({ required_error: "Title is required" }),
    content: z.string({ required_error: "Description is required" }).min(20),
    image: z
      .string({ required_error: "Image URL is required" })
      .url("Must be a valid URL"),
    authorName: z.string({ required_error: "Author name is required" }),
  }),
};
const params = {
  params: z.object({
    postId: z.string({ required_error: "postId required" }),
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
