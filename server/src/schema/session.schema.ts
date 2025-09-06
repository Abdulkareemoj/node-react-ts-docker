import z from "zod";

export const createUserSessionSchema = z.object({
  body: z.object({
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(6, "Password is too short - 6 Characters Minimum"),
  }),
});
