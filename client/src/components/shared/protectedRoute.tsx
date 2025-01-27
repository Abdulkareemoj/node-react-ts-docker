import React from "react";
import { Navigate } from "@tanstack/react-router"; // Use the appropriate import for TanStack Router
import { useAuth } from "../../utils/authContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string; // Optional role requirement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/signIn" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/auth/unauthorized" />; // Redirect to an unauthorized page
  }

  return <>{children}</>;
};

export default ProtectedRoute;
