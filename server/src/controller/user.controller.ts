import { Request, Response, NextFunction } from "express";
import { omit } from "lodash-es";
import { createUser } from "../service/user.service";
import log from "../logger";
import { CreateUserInput } from "../schema/user.schema";

// Example RBAC middleware
// function authorize(roles: string[]) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const userRoles = res.locals.user.roles;
//     const hasPermission = roles.some((role) => userRoles.includes(role));
//     if (!hasPermission) {
//       return res
//         .status(403)
//         .send("You do not have permission to perform this action");
//     }
//     next();
//   };
// }

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    // Destructure the roles field from the request body
    const { roles, ...restOfBody } = req.body;

    // Pass the extracted roles along with the rest of the user data to createUser
    const user = await createUser({ ...restOfBody, roles });

    // Omit password from the response
    return res.send(omit(user.toJSON(), "password"));
  } catch (e: unknown) {
    log.error(e);
    if (e instanceof Error) {
      return res.status(409).send(e.message);
    }
    return res.status(500).send("Internal Server Error");
  }
}
