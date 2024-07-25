export enum Role {
  Admin = "admin",
  User = "user",
}

export const permissions = {
  createProduct: [Role.Admin],
  updateProduct: [Role.Admin],
  getProduct: [Role.Admin, Role.User], // Assuming you want both Admin and User to view products
  deleteProduct: [Role.Admin],
    createPost: [Role.Admin],
  updatePost: [Role.Admin],
  getPost: [Role.Admin, Role.User], // Assuming you want both Admin and User to view Posts
  deletePost: [Role.Admin],
};
