import { Request, Response } from "express";
import { omit } from "lodash";
import { createUser } from "../service/user.service";
import log from "../logger";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    //omit password
    return res.send(omit(user.toJSON(), "password"));
    //look at previous commit incase this doesnt work out well edd74a1
  } catch (e: unknown) {
    log.error(e);
    if (e instanceof Error) {
      return res.status(409).send(e.message);
    }
    return res.status(500).send("Internal Server Error");
  }
}
