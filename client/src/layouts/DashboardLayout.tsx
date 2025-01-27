import React, { useState, ReactNode } from "react";
import Sidebar from "../components/dashboard/Sidebar/index";
import Header from "../components/dashboard/Header";
import ProtectedRoute from "@/components/shared/protectedRoute";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ProtectedRoute>
      <div className="dark:bg-boxdark-2 dark:text-bodydark h-screen">
        {/* Page Wrapper */}
        <div className="flex h-full">
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
              {children}
            </main>
          </div>
        </div>
      </div>{" "}
    </ProtectedRoute>
  );
}
