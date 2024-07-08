import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short"),
    passwordConfirmation: string({
      required_error: "confirmation is required",
    }),
    // .oneOf([ref("password"), null], "Password must match"),
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

    // .oneOf([ref("password"), null], "Password must match"),
    email: string({ required_error: "Email is required" }).email(
      "Must be a valid email"
    ),
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
