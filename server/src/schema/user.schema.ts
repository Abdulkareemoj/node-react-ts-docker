import { TypeOf, array, object, string } from "zod";

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
    roles: array(
      string({
        required_error: "At least one role is required",
      })
    )
      .min(1, "At least one role is required")
      .refine(
        (data) =>
          data.every((role) =>
            [
              "user", //"editor", "viewer"
            ].includes(role)
          ),
        {
          message: "Invalid role",
        }
      )
      .default(["user"]),
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

// Admin User Schema
export const createAdminSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short"),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
    email: string({ required_error: "Email is required" }).email(
      "Must be a valid email"
    ),
    roles: array(
      string({
        required_error: "At least one role is required",
      })
    )
      .min(1, "At least one role is required")
      .refine(
        (data) => data.every((role) => ["admin", "superadmin"].includes(role)),
        {
          message: "Invalid role",
        }
      )
      .default(["admin"]),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

// Admin Session Schema
export const createAdminSessionSchema = object({
  body: object({
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short"),
    email: string({ required_error: "Email is required" }).email(
      "Must be a valid email"
    ),
  }),
});

export type CreateAdminInput = Omit<
  TypeOf<typeof createAdminSchema>,
  "body.passwordConfirmation"
>;

export type CreateAdminSessionInput = TypeOf<typeof createAdminSessionSchema>;
