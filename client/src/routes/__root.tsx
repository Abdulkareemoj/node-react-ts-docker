import {
  Outlet,
  createRootRouteWithContext,
  useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../components/shared/header";
import DashboardLayout from "../components/dashboard/DashboardLayout"; // Import your layout

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();

  // Check if the current route starts with /dashboard
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Use DashboardLayout for dashboard routes, else use the normal header */}
      {isDashboardRoute ? (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
