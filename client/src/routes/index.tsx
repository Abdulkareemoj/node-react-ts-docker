import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/signin" className="[&.active]:font-bold">
          Sign In
        </Link>
        <Link to="/signup" className="[&.active]:font-bold">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
