import { Express, Request, Response } from "express";
import {
  createShortUrl,
  getAnalytics,
  getShortUrl,
  handleRedirect,
} from "../controller/shortUrl.controller";
import validateResource from "../middleware/validateRequest";
import { createShortURLSchema } from "../schema/createShortUrl.schema";
// import { authenticate, checkRole } from "../middleware/auth";
import { signIn, signOut, signUp } from "../controller/auth.controller";
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
  deletePostHandler,
  getPostHandler,
  updatePostHandler,
} from "../controller/post.controller";
import requiresRole from "../middleware/requiresRole";
import { permissions } from "../middleware/roles";
import { verifyToken } from "../middleware/verifyToken";

function routes(app: Express) {
  /**
   * @openapi
   * /api/healthcheck:
   *   get:
   *     tags:
   *       - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/api/healthcheck", (req: Request, res: Response) => {
    return res.send("bruhh");
  });

  /**
   * @openapi
   * '/api/url':
   *  post:
   *     tags:
   *     - URL
   *     summary: Create a short URL
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateShortURLInput'
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateShortURLResponse'
   *       400:
   *         description: Bad request
   */
  app.post("/api/url", validateResource(createShortURLSchema), createShortUrl);

  /**
   * @openapi
   * '/{shortId}':
   *  get:
   *    tags:
   *    - URL
   *    summary: Redirect to the original URL
   *    parameters:
   *      - name: shortId
   *        in: path
   *        description: The short ID of the URL
   *        required: true
   *        schema:
   *          type: string
   *    responses:
   *      302:
   *        description: Redirects to the original URL
   */
  app.get("/:shortId", handleRedirect);

  /**
   * @openapi
   * '/api/url/{shortId}':
   *  get:
   *    tags:
   *    - URL
   *    summary: Get a short URL by its short ID
   *    parameters:
   *      - name: shortId
   *        in: path
   *        description: The short ID of the URL
   *        required: true
   *        schema:
   *          type: string
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateShortURLResponse'
   *      404:
   *        description: Short URL not found
   */
  app.get("/api/url/:shortId", getShortUrl);

  /**
   * @openapi
   * /api/analytics:
   *   get:
   *     tags:
   *       - URL
   *     summary: Get analytics for all short URLs
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/CreateShortURLResponse'
   */
  app.get("/api/analytics", getAnalytics);

  /**
   * @openapi
   * /api/signin:
   *   post:
   *     tags:
   *       - Auth
   *     summary: Sign in a user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateUserSessionInput'
   *     responses:
   *       200:
   *         description: Success, returns access and refresh tokens
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 accessToken:
   *                   type: string
   *                 refreshToken:
   *                   type: string
   *       401:
   *         description: Invalid email or password
   */
  app.post("/api/signin", signIn);

  /**
   * @openapi
   * /api/signup:
   *   post:
   *     tags:
   *       - Auth
   *     summary: Sign up a new user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *       200:
   *         description: Success, returns the new user
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/CreateUserResponse'
   *       409:
   *         description: User already exists
   *       400:
   *         description: Bad request
   */
  app.post("/api/signup", signUp);

  /**
   * @openapi
   * /signout:
   *   post:
   *     tags:
   *       - Auth
   *     summary: Sign out a user (invalidates token)
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Successfully signed out
   *       401:
   *         description: Unauthorized
   */
  app.post("/signout", verifyToken, signOut);

  /**
   * @openapi
   * /api/users:
   *   post:
   *     tags:
   *       - User
   *     summary: Register a user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/CreateUserResponse'
   *       409:
   *         description: Conflict
   *       400:
   *         description: Bad request
   */
  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  //Session endpoints
  /**
   * @openapi
   * /api/sessions:
   *   post:
   *     tags:
   *       - Session
   *     summary: Create a session for a user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateUserSessionInput'
   *     responses:
   *       200:
   *         description: Success, returns access and refresh tokens
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 accessToken:
   *                   type: string
   *                 refreshToken:
   *                   type: string
   *       401:
   *         description: Invalid email or password
   */
  app.post(
    "/api/sessions",
    validateResource(createUserSessionSchema),
    createUserSessionHandler
  );

  /**
   * @openapi
   * /api/sessions:
   *   get:
   *     tags:
   *       - Session
   *     summary: Get all user sessions
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Success, returns a list of sessions
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/UserSession'
   *       403:
   *         description: Forbidden
   */
  app.get("/api/sessions", requiresRole, getUserSessionsHandler);

  /**
   * @openapi
   * /api/sessions:
   *   delete:
   *     tags:
   *       - Session
   *     summary: Deletes a user session (logout)
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Session deleted successfully
   *       403:
   *         description: Forbidden
   */
  app.delete("/api/sessions", requiresRole, deleteSessionHandler);

  //Product endpoints
  /**
   * @openapi
   * /api/products:
   *   post:
   *     tags:
   *       - Product
   *     summary: Create a new product
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateProductInput'
   *     responses:
   *       200:
   *         description: Product created successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ProductResponse'
   *       403:
   *         description: Forbidden
   */
  app.post(
    "/api/products",
    [
      requiresRole(permissions.createProduct),
      validateResource(createProductSchema),
    ],
    createProductHandler
  );

  /**
   * @openapi
   * /api/products/{productId}:
   *   put:
   *     tags:
   *       - Product
   *     summary: Update a product
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: productId
   *         required: true
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateProductInput'
   *     responses:
   *       200:
   *         description: Product updated successfully
   */
  app.put(
    "/api/products/:productId",
    [
      requiresRole(permissions.updateProduct),
      validateResource(updateProductSchema),
    ],
    updateProductHandler
  );

  /**
   * @openapi
   * /api/products/{productId}:
   *   get:
   *     tags:
   *       - Product
   *     summary: Get a single product
   *     parameters:
   *       - in: path
   *         name: productId
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ProductResponse'
   *       404:
   *         description: Product not found
   */
  app.get(
    "/api/products/:productId",
    validateResource(createProductSchema),
    getProductHandler
  );

  /**
   * @openapi
   * /api/products/{productId}:
   *   delete:
   *     tags:
   *       - Product
   *     summary: Delete a product
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: productId
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Product deleted successfully
   */
  app.delete(
    "/api/products/:productId",
    [
      requiresRole(permissions.deleteProduct),
      validateResource(deleteProductSchema),
    ],
    deleteProductHandler
  );

  //Posts endpoints
  /**
   * @openapi
   * /api/posts:
   *   post:
   *     tags:
   *       - Post
   *     summary: Create a new post
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreatePostInput'
   *     responses:
   *       200:
   *         description: Post created successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/PostResponse'
   */
  app.post(
    "/api/posts",
    [requiresRole(permissions.createPost), validateResource(createPostSchema)],
    createPostHandler
  );

  /**
   * @openapi
   * /api/posts/{postId}:
   *   put:
   *     tags:
   *       - Post
   *     summary: Update a post
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: postId
   *         required: true
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdatePostInput'
   *     responses:
   *       200:
   *         description: Post updated successfully
   */
  app.put(
    "/api/posts/:postId",
    [requiresRole(permissions.updatePost), validateResource(updatePostSchema)],
    updatePostHandler
  );

  /**
   * @openapi
   * /api/posts/{postId}:
   *   get:
   *     tags:
   *       - Post
   *     summary: Get a single post
   *     parameters:
   *       - in: path
   *         name: postId
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/PostResponse'
   *       404:
   *         description: Post not found
   */
  app.get(
    "/api/posts/:postId",
    validateResource(getPostSchema),
    getPostHandler
  );

  /**
   * @openapi
   * /api/posts/{postId}:
   *   delete:
   *     tags:
   *       - Post
   *     summary: Delete a post
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: postId
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Post deleted successfully
   */
  app.delete(
    "/api/posts/:postId",
    [requiresRole(permissions.deletePost), validateResource(deletePostSchema)],
    deletePostHandler
  );
}

export default routes;
