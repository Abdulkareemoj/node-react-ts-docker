import { z } from "zod";

export const createUserSchema = z.object({
  body: z
    .object({
      username: z.string().min(1, "Username is required"),
      email: z.string().email("Invalid email address"),
      firstname: z.string().min(1, "First name is required"),
      lastname: z.string().min(1, "Last name is required"),
      password: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
      passwordConfirmation: z.string({
        message: "Password confirmation is required",
      }),
      role: z.enum(["user", "admin", "superadmin"]).optional().default("user"),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      path: ["passwordConfirmation"],
      message: "Passwords don’t match",
    }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
