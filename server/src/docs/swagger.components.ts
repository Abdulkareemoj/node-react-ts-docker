// src/docs/swagger.components.ts

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateShortURLInput:
 *      type: object
 *      required:
 *        - destination
 *      properties:
 *        destination:
 *          type: string
 *          format: uri
 *          description: The URL to shorten
 *          example: https://www.example.com
 *    CreatePostInput:
 *      type: object
 *      required:
 *        - title
 *        - content
 *        - image
 *        - authorName
 *      properties:
 *        title:
 *          type: string
 *          description: The title of the post
 *          example: My Awesome Post
 *        content:
 *          type: string
 *          description: The content of the post
 *          example: This is the body of my awesome post!
 *        image:
 *          type: string
 *          format: uri
 *          description: URL of the post image
 *          example: https://example.com/image.jpg
 *        authorName:
 *          type: string
 *          description: Name of the author
 *          example: John Doe
 *    UpdatePostInput:
 *      type: object
 *      required:
 *        - title
 *        - content
 *        - image
 *        - authorName
 *      properties:
 *        title:
 *          type: string
 *          description: The title of the post
 *          example: My Awesome Post
 *        content:
 *          type: string
 *          description: The content of the post
 *          example: This is the body of my awesome post!
 *        image:
 *          type: string
 *          format: uri
 *          description: URL of the post image
 *          example: https://example.com/image.jpg
 *        authorName:
 *          type: string
 *          description: Name of the author
 *          example: John Doe
 *    GetPostInput:
 *      type: object
 *      required:
 *        - postId
 *      properties:
 *        postId:
 *          type: string
 *          description: The ID of the post to retrieve
 *          example: 64c4e462b991d323b9c6c5e1
 *    DeletePostInput:
 *      type: object
 *      required:
 *        - postId
 *      properties:
 *        postId:
 *          type: string
 *          description: The ID of the post to delete
 *          example: 64c4e462b991d323b9c6c5e1
 *    CreateProductInput:
 *      type: object
 *      required:
 *        - title
 *        - description
 *        - price
 *        - image
 *      properties:
 *        title:
 *          type: string
 *          description: The title of the product
 *          example: Awesome T-Shirt
 *        description:
 *          type: string
 *          description: A detailed description of the product
 *          example: This is the most awesome t-shirt you'll ever own!
 *        price:
 *          type: string
 *          description: The price of the product
 *          example: 29.99
 *        image:
 *          type: string
 *          format: uri
 *          description: URL of the product image
 *          example: https://example.com/tshirt.jpg
 *    UpdateProductInput:
 *      type: object
 *      required:
 *        - title
 *        - description
 *        - price
 *        - image
 *      properties:
 *        title:
 *          type: string
 *          description: The title of the product
 *          example: Awesome T-Shirt (Updated)
 *        description:
 *          type: string
 *          description: A detailed description of the product
 *          example: This is the most awesome t-shirt you'll ever own! (Now even better!)
 *        price:
 *          type: string
 *          description: The price of the product
 *          example: 39.99
 *        image:
 *          type: string
 *          format: uri
 *          description: URL of the product image
 *          example: https://example.com/new_tshirt.jpg
 *    GetProductInput:
 *      type: object
 *      required:
 *        - productId
 *      properties:
 *        productId:
 *          type: string
 *          description: The ID of the product to retrieve
 *          example: 64c4e462b991d323b9c6c5e1
 *    DeleteProductInput:
 *      type: object
 *      required:
 *        - productId
 *      properties:
 *        productId:
 *          type: string
 *          description: The ID of the product to delete
 *          example: 64c4e462b991d323b9c6c5e1
 *    CreateUserSessionInput:
 *      type: object
 *      required:
 *        - password
 *        - email
 *      properties:
 *        email:
 *          type: string
 *          format: email
 *          description: The email address of the user
 *          example: johndoe@example.com
 *        password:
 *          type: string
 *          description: The password of the user
 *          example: supersecret
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - username
 *        - password
 *        - passwordConfirmation
 *        - firstname
 *        - lastname
 *        - role
 *        - email
 *      properties:
 *        username:
 *          type: string
 *          description: The username of the user
 *          example: johndoe
 *        password:
 *          type: string
 *          description: The password of the user
 *          example: supersecret
 *        passwordConfirmation:
 *          type: string
 *          description: The password confirmation of the user
 *          example: supersecret
 *        firstname:
 *          type: string
 *          description: The firstname of the user
 *          example: john
 *        lastname:
 *          type: string
 *          description: The lastname of the user
 *          example: doe
 *        role:
 *          type: string
 *          description: The role of the user
 *          enum: [user, admin, superadmin]
 *          default: user
 *        email:
 *          type: string
 *          format: email
 *          description: The email address of the user
 *          example: johndoe@example.com
 *    CreateUserSessionResponse:
 *      type: object
 *      properties:
 *        accessToken:
 *          type: string
 *        refreshToken:
 *          type: string
 */
export {}; // Export something to make it a module
