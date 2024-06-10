import { TypeOf, z } from "zod"

const payload = {
    body: z.object({
        title: z.string({required_error:"Title is required"}),
        body: z.string({required_error:"Body is required"}).min(120, "Body is too short, 120 char min")
    }),
} 
const params = {
    params: z.object({
        postId: z.string({required_error:"postId required"})
    }),
}

export const createPostSchema = z.object({
    ...payload,
})

export const updatePostSchema = z.object({
   ...params,
    ...payload,
})
export const getPostSchema = z.object({
   ...params,
    ...payload,
})


export const deletePostSchema = z.object({
...params,
})


export type createPostInput = TypeOf<typeof createPostSchema>

export type updatePostInput = TypeOf<typeof updatePostSchema>

export type readPostInput = TypeOf<typeof getPostSchema>

export type deletePostInput = TypeOf<typeof deletePostSchema>