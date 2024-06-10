import { TypeOf, number, object, string, z } from "zod"

const payload = {
    body: object({
        title: string({required_error:"Title is required"}),
        description: string({required_error:"Description is required"}).min(120, "Body is too short, 120 char min"),
        price: string({required_error:"Price is required"}),
        image: string({required_error:"Image is required"}),
    }),
} 
const params = {
    params: object({
        productId: string({required_error:"productId required"})
    }),
}

export const createProductSchema = z.object({
    ...payload,
})

export const updateProductSchema = z.object({
   ...params,
    ...payload,
})

export const deleteProductSchema = z.object({
...params,
})

export const readProductSchema = z.object({
...params,
...payload,
})

export type createProductInput = TypeOf<typeof createProductSchema>

export type updateProductInput = TypeOf<typeof updateProductSchema>

export type readProductInput = TypeOf<typeof readProductSchema>

export type deleteProductInput = TypeOf<typeof deleteProductSchema>   