import { createAuthClient } from "better-auth/react";
import {
  adminClient,
  usernameClient,
  emailOTPClient,
  oneTapClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: "http://localhost:5173",
  plugins: [adminClient(), usernameClient(),  oneTapClient({
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID!,
      promptOptions: {
        maxAttempts: 1,
      },
    }),emailOTPClient()],
});


export const {
  signUp,
  signIn,
  signOut,
  useSession,
  getSession,
  forgetPassword,
  resetPassword,
  isUsernameAvailable,
  sendVerificationEmail,
  requestPasswordReset,
} = authClient;
