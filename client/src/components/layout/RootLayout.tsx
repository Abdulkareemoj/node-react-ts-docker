import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { ReactNode } from "react";
import { ThemeProvider } from "../integrations/theme-provider";
import { Toaster } from "../ui/sonner";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        {/* <h2 className="text-2xl">Root Layout</h2> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </div>
      <Footer />
    </>
  );
}
