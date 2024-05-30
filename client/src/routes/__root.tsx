import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <h1>Help...</h1>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
