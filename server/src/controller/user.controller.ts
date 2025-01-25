import { Request, Response, NextFunction } from "express";
import { omit } from "lodash-es";
import { createUser } from "../service/user.service";
import log from "../logger";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    // Destructure the roles field from the request body
    const { role, ...restOfBody } = req.body;

    // Pass the extracted roles along with the rest of the user data to createUser
    const user = await createUser({ ...restOfBody, role });

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
