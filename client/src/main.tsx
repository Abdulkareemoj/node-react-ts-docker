import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <GoogleOAuthProvider clientId={clientID}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </GoogleOAuthProvider>
  );
}
