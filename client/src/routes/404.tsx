import { Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0F0F12]">
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <div className="mx-auto w-full max-w-md text-center">
          {/* 404 Illustration */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="text-[120px] font-bold text-gray-900 dark:text-white leading-none">
                404
              </div>
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gray-100 dark:bg-[#1F1F23] flex items-center justify-center">
                <Search className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Page not found
          </h1>

          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved, deleted, or perhaps the URL was mistyped.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="w-full sm:w-auto">
              <Link to="/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>

            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link to="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need help?{" "}
              <Link
                to="#"
                className="font-medium text-gray-900 dark:text-white hover:underline"
              >
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-[#1F1F23] py-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Task. All rights reserved.
        </p>
      </div>
    </div>
  );
}
