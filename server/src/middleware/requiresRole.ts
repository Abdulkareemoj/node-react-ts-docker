// requiresUser.ts
import { get } from "lodash-es";
import { Request, Response, NextFunction } from "express";
import { permissions, Role } from "./roles"; // Adjust the path as necessary

const requiresRole =
  (requiredPermissions: Role[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const user = get(req, "user");
    if (!user) {
      return res.sendStatus(403);
    }

    // Assuming the user's role is stored in [`user.role`] "server/src/middleware/requiresUser.ts"), adjust as necessary
    const userRoles: Role[] = get(user, "roles", []);

    // Check if the user has any of the required roles
    const hasRequiredRole = userRoles.some((role) =>
      requiredPermissions.includes(role)
    );
    if (!hasRequiredRole) {
      return res.sendStatus(403);
    }

    return next();
  };

export default requiresRole;
