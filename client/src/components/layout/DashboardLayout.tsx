import { useAuth } from "@/components/integrations/authContext";
import ProtectedRoute from "@/components/shared/protectedRoute";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import UserDropdown from "@/components/dashboard/user-dropdown";
import FeedbackDialog from "@/components/dashboard/feedback-dialog";
import { CircleGauge } from "lucide-react";
import type { ReactNode } from "react";
import { ThemeProvider } from "../integrations/theme-provider";
import { Toaster } from "../ui/sonner";
import { ModeToggle } from "../shared/ModeToggle";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { role } = useAuth(); // Get the user role
  return (
    <ProtectedRoute requiredRole="admin">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="overflow-hidden px-4 md:px-6 lg:px-8">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
              <div className="flex flex-1 items-center gap-2 px-3">
                <SidebarTrigger className="-ms-4" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                        <CircleGauge size={22} aria-hidden="true" />
                        <span className="sr-only">Dashboard</span>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Contacts</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="flex gap-3 ml-auto">
                <ModeToggle />
                <FeedbackDialog />
                <UserDropdown />
              </div>
            </header>

            {children}

            <Toaster />
          </SidebarInset>
        </SidebarProvider>{" "}
      </ThemeProvider>
    </ProtectedRoute>
  );
}
