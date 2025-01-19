import { get } from "lodash-es";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { Role } from "./roles"; // Adjust the path as necessary

export default function requiresRole(
  requiredPermissions: Role[]
): RequestHandler {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = get(req, "user");
    if (!user) {
      res.sendStatus(403); // Forbidden if user is not present
      return;
    }

    // Assuming the user's roles are stored in `user.roles`
    const userRoles: Role[] = get(user, "roles", []);

    // Check if the user has any of the required roles
    const hasRequiredRole = userRoles.some((role) =>
      requiredPermissions.includes(role)
    );
    if (!hasRequiredRole) {
      res.sendStatus(403); // Forbidden if no matching role is found
      return;
    }

    next(); // Proceed to the next middleware or route handler
  };
}
