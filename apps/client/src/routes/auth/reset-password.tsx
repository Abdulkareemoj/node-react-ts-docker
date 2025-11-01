import { Link, createFileRoute, useRouter } from "@tanstack/react-router";
import { axiosClient } from "@/utils/endpoints";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import RootLayout from "@/components/layout/RootLayout";
import { resetPasswordSchema, type ResetPasswordFormValues } from "@/lib/schemas";

export const Route = createFileRoute("/auth/reset-password")({
  component: ResetPassword,
});

function ResetPassword({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();
  const { token } = Route.useSearch() as { token: string };

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    try {
      const response = await axiosClient.post(
        `/api/reset-password/${token}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(response.data.message ?? "Password reset successfully");
      router.navigate({ to: "/auth/signin" });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message ?? "Password reset failed");
      } else {
        alert("An unexpected error occurred. Please try again later.");
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold">Reset Password</h1>
                        <p className="text-muted-foreground text-balance">
                          Enter your new password
                        </p>
                      </div>
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="password">New Password</FormLabel>
                              <FormControl>
                                <Input type="password" autoComplete="new-password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="passwordConfirmation">Confirm New Password</FormLabel>
                              <FormControl>
                                <Input type="password" autoComplete="new-password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Reset Password
                      </Button>
                    </div>
                  </form>
                </Form>
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
