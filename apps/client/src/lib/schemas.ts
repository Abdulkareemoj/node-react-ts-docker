import { z } from "zod/v4";
//signup

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "Name must be at least 2 characters." }),
    lastName: z
      .string()
      .min(2, { message: "Name must be at least 2 characters." }),
    username: z
      .string()
      .min(5, { message: "Username must be at least 5 characters." })
      .max(25, { message: "Username cannot exceed 30 characters." })
      .regex(/^[a-zA-Z0-9_-]+$/, {
        message: "Only letters, numbers, dashes, and underscores are allowed.",
      }),
    email: z.email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    image: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;

//signin
export const signInSchema = z.object({
  identifier: z.email({
    message: "Email or username is required.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export type SignInFormValues = z.infer<typeof signInSchema>;

//forgot-password
export const forgotPasswordSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

//reset-password
export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

//verify-email
export const verifyEmailSchema = z.object({
  otp: z.string().length(6, {
    message: "OTP is required.",
  }),
  email: z.string().email(),
});

export type VerifyEmailFormValues = z.infer<typeof verifyEmailSchema>;
