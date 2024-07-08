import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shortener/dashboard")({
  component: () => <div>Hello /shortener/dashboard!</div>,
});
