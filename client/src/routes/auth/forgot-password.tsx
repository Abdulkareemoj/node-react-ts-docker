import { Link } from "@tanstack/react-router";
import { axiosClient } from "@/utils/endpoints";
import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import RootLayout from "@/components/layout/RootLayout";

export const Route = createFileRoute("/auth/forgot-password")({
  component: ForgotPassword,
});

function ForgotPassword({ className, ...props }: React.ComponentProps<"div">) {
  const handleForgotPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axiosClient.post("/api/forgot-password", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      Swal.fire({
        icon: "success",
        title: "Password reset email sent",
        text: response.data.message,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        Swal.fire({
          icon: "error",
          title: "Failed to send password reset email",
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "An unexpected error occurred",
          text: "Please try again later.",
        });
      }
    }
  };

  return (
    <RootLayout>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
              <CardContent className="grid p-0 md:grid-cols-2">
                <form onSubmit={handleForgotPassword} className="p-6 md:p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">
                        Forgot your password?
                      </h1>
                      <p className="text-muted-foreground text-balance">
                        Enter your email to reset your password
                      </p>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="text"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send password reset email
                    </Button>
                    <div className="text-center text-sm">
                      Remember your password?{" "}
                      <Link
                        to="/auth/signin"
                        className="underline underline-offset-4"
                      >
                        Sign in
                      </Link>
                    </div>
                  </div>
                </form>
                <div className="bg-muted relative hidden md:block">
                  <img
                    src="/placeholder.svg"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
              By clicking continue, you agree to our{" "}
              <Link to="/terms">Terms of Service </Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>.
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
