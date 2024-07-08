import { Express, Request, Response } from "express";
import {
  createShortUrl,
  getAnalytics,
  getShortUrl,
  handleRedirect,
} from "../controller/shortUrl.controller";
import validateResource from "../middleware/validateRequest";
import { createShortURLSchema } from "../schema/createShortUrl.schema";
import { authenticate, checkRole } from "../middleware/auth";
import { signIn, signOut } from "../controller/auth.controller";
import {
  createProductHandler,
  updateProductHandler,
  getProductHandler,
  deleteProductHandler,
} from "../controller/product.controller";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  deleteSessionHandler,
} from "../controller/session.controller";
import { createUserHandler } from "../controller/user.controller";
import {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
} from "../schema/product.schema";
import {
  createUserSchema,
  createUserSessionSchema,
} from "../schema/user.schema";
import {
  createPostSchema,
  deletePostSchema,
  getPostSchema,
  updatePostSchema,
} from "../schema/post.schema";
import {
  createPostHandler,
  getPostHandler,
  updatePostHandler,
} from "../controller/post.controller";
import requiresUser from "../middleware/requiresUser";

//TODO add other roles with requiresUser
function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    return res.send("bruhh");
  });

  app.post("/api/url", validateResource(createShortURLSchema), createShortUrl);

  app.get("/:shortId", handleRedirect);

  app.get("/api/url/:shortId", getShortUrl);

  app.get("/api/analytics", getAnalytics);

  app.post("/api/signin", signIn);

  app.post("/api/signout", signOut);

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  //Session endpoints
  app.post(
    "/api/sessions",
    validateResource(createUserSessionSchema),
    createUserSessionHandler
  );

  app.get("/api/sessions", requiresUser, getUserSessionsHandler);

  app.delete("/api/sessions", requiresUser, deleteSessionHandler);

  //Product endpoints
  app.post(
    "/api/products",
    [requiresUser, validateResource(createProductSchema)],
    createProductHandler
  );

  app.put(
    "/api/products/:productId",
    [requiresUser, validateResource(updateProductSchema)],
    updateProductHandler
  );

  app.get(
    "/api/products/:productId",
    validateResource(createProductSchema),
    getProductHandler
  );

  app.delete(
    "/api/products/:productId",
    [requiresUser, validateResource(deleteProductSchema)],
    deleteProductHandler
  );

  //Post endpoints
  app.post(
    "/api/posts",
    [requiresUser, validateResource(createPostSchema)],
    createPostHandler
  );

  app.put(
    "/api/posts/:postId",
    [requiresUser, validateResource(updatePostSchema)],
    updatePostHandler
  );

  app.get(
    "/api/posts/:postId",
    validateResource(getPostSchema),
    getPostHandler
  );

  app.delete(
    "/api/posts/:postId",
    [requiresUser, validateResource(deletePostSchema)],
    getPostHandler
  );
}

export default routes;
