import { TypeOf, array, object, string } from "zod";

export const createUserSchema = object({
  body: object({
    username: string({
      required_error: "username is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short"),
    passwordConfirmation: string({
      required_error: "Confirmation is required",
    }),
    firstname: string({
      required_error: "Firstname is required",
    }),
    lastname: string({
      required_error: "Lastname is required",
    }),
    role: string({
      required_error: "Role is required",
    })
      .refine((role) => ["user", "admin", "superadmin"].includes(role), {
        message: "Invalid role",
      })
      .default("user"), // Default to "user" if no role is specified
    email: string({ required_error: "Email is required" }).email(
      "Must be a valid email"
    ),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export const createUserSessionSchema = object({
  body: object({
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short"),
    email: string({ required_error: "Email is required" }).email(
      "Must be a valid email"
    ),
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;

export type CreateUserSessionInput = TypeOf<typeof createUserSessionSchema>;
