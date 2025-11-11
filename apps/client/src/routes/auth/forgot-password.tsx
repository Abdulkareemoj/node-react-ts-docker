import { Link, createFileRoute } from "@tanstack/react-router";
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
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "@/lib/schemas";

// @ts-ignore - route types will include this file
export const Route = createFileRoute("/auth/forgot-password")({
  component: ForgotPassword,
});

function ForgotPassword({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      const response = await axiosClient.post("/api/forgot-password", values, {
        headers: { "Content-Type": "application/json" },
      });
      // using shadcn toast system (sonner already in project)
      // fallback simple alert to keep it minimal
      alert(response.data.message ?? "Password reset email sent");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(
          error.response.data.message ?? "Failed to send password reset email"
        );
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
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="p-6 md:p-8"
                  >
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
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  autoComplete="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send password reset email
                      </Button>
                      <div className="text-center text-sm">
                        Remember your password?{" "}
                        <Link
                          to={"/auth/signin" as any}
                          className="underline underline-offset-4"
                        >
                          Sign in
                        </Link>
                      </div>
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
