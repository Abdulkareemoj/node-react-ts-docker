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
    const user = await createUser(req.body);

    // Omit password from the response
    return res.send(omit(user.toJSON(), "password"));
  } catch (error: unknown) {
    log.error(error);
    if (error instanceof Error && (error as any).code === 11000) {
      return res
        .status(409)
        .send("User with this email or username already exists.");
    }
    // For other errors, send a generic 400 Bad Request
    return res.status(400).send((error as Error).message);
  }
}
