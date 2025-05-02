/**
 * @openapi
 * /api/healthcheck:
 *   get:
 *     tags:
 *       - Healthcheck
 *     summary: Healthcheck route
 *     responses:
 *      200:
 *        description: Success
 */

/**
 * @openapi
 * /api/url:
 *   post:
 *     tags:
 *       - Short URL
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
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShortURL'
 *       400:
 *         description: Bad request
 */

/**
 * @openapi
 * /{shortId}:
 *   get:
 *     tags:
 *       - Short URL
 *     summary: Redirect to original URL
 *     parameters:
 *       - name: shortId
 *         in: path
 *         description: The shortId of the URL
 *         required: true
 *     responses:
 *       302:
 *         description: Redirect
 *       404:
 *         description: Not Found
 */

/**
 * @openapi
 * /api/url/{shortId}:
 *   get:
 *     tags:
 *       - Short URL
 *     summary: Get Short URL information
 *     parameters:
 *       - name: shortId
 *         in: path
 *         description: The shortId of the URL
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/ShortURL'
 *       404:
 *         description: Not Found
 */

/**
 * @openapi
 * /api/analytics:
 *   get:
 *     tags:
 *       - Short URL
 *     summary: Get analytics
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @openapi
 * /api/signin:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Sign in
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserSessionInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserSessionResponse'
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/signup:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Sign up
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      400:
 *        description: Bad request
 */

/**
 * @openapi
 * /signout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Sign out
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/users:
 *   post:
 *     tags:
 *       - User
 *     summary: Create a new user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      400:
 *        description: Bad request
 */

/**
 * @openapi
 * /api/sessions:
 *   post:
 *     tags:
 *       - Session
 *     summary: Create a new session
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserSessionInput'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserSessionResponse'
 *      400:
 *        description: Bad request
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/sessions:
 *   get:
 *     tags:
 *       - Session
 *     summary: Get all sessions
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Session'
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/sessions:
 *   delete:
 *     tags:
 *       - Session
 *     summary: Delete all sessions
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 */

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
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateProductInput'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad request
 *       401:
 *         description: Unauthorized
 */

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
 *       - name: productId
 *         in: path
 *         description: The id of the product
 *         required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateProductInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 */

/**
 * @openapi
 * /api/products/{productId}:
 *   get:
 *     tags:
 *       - Product
 *     summary: Get a single product by the productId
 *     parameters:
 *       - name: productId
 *         in: path
 *         description: The id of the product
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */

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
 *       - name: productId
 *         in: path
 *         description: The id of the product
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 */

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
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreatePostInput'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      400:
 *        description: Bad request
 *       401:
 *         description: Unauthorized
 */

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
 *       - name: postId
 *         in: path
 *         description: The id of the post
 *         required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdatePostInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      400:
 *        description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 */

/**
 * @openapi
 * /api/posts/{postId}:
 *   get:
 *     tags:
 *       - Post
 *     summary: Get a single post by the postId
 *     parameters:
 *       - name: postId
 *         in: path
 *         description: The id of the post
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Post'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */

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
 *       - name: postId
 *         in: path
 *         description: The id of the post
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 */

export {};
