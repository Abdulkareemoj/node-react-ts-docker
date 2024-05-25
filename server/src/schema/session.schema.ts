import { object, string } from "zod";

export const createUserSessionSchema = object({
  body: object({
    // name: string({ required_error: "Name is required" }),
    password: string({ required_error: "Password is required" })
      .min(6, "Password is too short - 6 Characters Minimum"),
    //   .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain letters"),
    email: string({ required_error: "Email is required" }).email(
      "Must be a valid email"
    ),
  }),
});
