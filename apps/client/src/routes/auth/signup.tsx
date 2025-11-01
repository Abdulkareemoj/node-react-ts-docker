import { Link, useRouter } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignUpFormValues, signUpSchema } from "@/lib/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";

// @ts-ignore - route types will regenerate to include this file
export const Route = createFileRoute("/auth/signup")({
  component: SignUp,
});

function SignUp() {
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(file);

      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  async function convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => resolve(reader.result as string);

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }
  // Initialize the form with React Hook Form and Zod resolver
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
    },
  });
  // Handle form submission
async function handleSignUp(values: SignUpFormValues) {
  try {
    await signUp.email(
      {
        email: values.email,
        password: values.password,
        name: `${values.firstName} ${values.lastName}`,
        username: values.username,
        image: image ? await convertImageToBase64(image) : "",
      },
      {
        onRequest: () => {
          setIsLoading(true);
          setServerError(null);
        },
        onResponse: () => {
          setIsLoading(false);
        },
          onError: (ctx: { error: { message: string } }) => {
          setServerError(ctx.error.message);
        },
        onSuccess: async () => {
          toast.success("Account created successfully!");
          router.navigate({ to: "/dashboard" });
        },
      }
    );
  } catch (err) {
    setServerError((err as Error)?.message || "Something went wrong");
  } finally {
    setIsLoading(false);
  }
}
  return (
    <RootLayout>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <div className={cn("flex flex-col gap-6")}>
            <Card className="overflow-hidden p-0">
              <CardContent className="grid p-0 md:grid-cols-2">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSignUp)}
                    className="p-6 md:p-8"
                  >
                    {serverError && (
                      <div className="text-sm font-medium text-destructive text-center">
                        {serverError}
                      </div>
                    )}
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold">
                          Create an account
                        </h1>
                        <p className="text-muted-foreground text-balance">
                          Enter your details to sign up
                        </p>
                      </div>
                      <div className="grid gap-3">
                        <FormItem>
                          <FormLabel htmlFor="avatar">Avatar</FormLabel>
                          <FormControl>
                            <Input
                              id="avatar"
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                          </FormControl>
                          {imagePreview ? (
                            <div className="mt-2 flex justify-start">
                              <img
                                src={imagePreview}
                                alt="Avatar preview"
                                className="h-20 w-20 rounded-full object-cover ring-1 ring-border"
                              />
                            </div>
                          ) : null}
                        </FormItem>
                      </div>
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="username">Username</FormLabel>
                              <FormControl>
                                <Input type="text" autoComplete="username" {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="email">Email</FormLabel>
                              <FormControl>
                                <Input type="email" autoComplete="email" {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="firstName">
                                Firstname
                              </FormLabel>
                              <FormControl>
                                <Input type="text" {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="lastName">Lastname</FormLabel>
                              <FormControl>
                                <Input type="text" {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="password">Password</FormLabel>
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
                              <FormLabel htmlFor="confirmPassword">
                                Confirm Password
                              </FormLabel>
                              <FormControl>
                                <Input type="password" autoComplete="new-password" {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Sign Up"}
                      </Button>
                      <div className="text-center text-sm">
                        Already have an account?{" "}
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
      </div>{" "}
    </RootLayout>
  );
}
