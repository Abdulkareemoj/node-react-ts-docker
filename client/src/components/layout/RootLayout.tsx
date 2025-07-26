import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { ReactNode } from "react";
import { Toaster } from "../ui/sonner";
import { ThemeProvider } from "@/components/integrations/theme-provider";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />

      {children}

      <Toaster />

      <Footer />
    </ThemeProvider>
  );
}
