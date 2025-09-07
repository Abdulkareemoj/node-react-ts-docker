import { Link, createFileRoute, useRouter } from "@tanstack/react-router";
import { axiosClient } from "@/utils/endpoints";
import type { FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import RootLayout from "@/components/layout/RootLayout";

export const Route = createFileRoute("/auth/reset-password")({
  component: ResetPassword,
});

function ResetPassword({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();
  const { token } = Route.useSearch() as { token: string };

  const handleResetPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.passwordConfirmation) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please make sure your passwords match.",
      });
      return;
    }

    try {
      const response = await axiosClient.post(
        `/api/reset-password/${token}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Password reset successfully",
        text: response.data.message,
      });

      router.navigate({ to: "/auth/signin" });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        Swal.fire({
          icon: "error",
          title: "Password reset failed",
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
                <form onSubmit={handleResetPassword} className="p-6 md:p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Reset Password</h1>
                      <p className="text-muted-foreground text-balance">
                        Enter your new password
                      </p>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="password">New Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="passwordConfirmation">
                        Confirm New Password
                      </Label>
                      <Input
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        type="password"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Reset Password
                    </Button>
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
              By clicking continue, you agree to our
              <Link to="/terms">Terms of Service </Link> and
              <Link to="/privacy">Privacy Policy</Link>.
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
