import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import Product, { ProductInput } from "../models/product.model";

export async function createProduct(
  input: Omit<ProductInput, "createdAt" | "updatedAt">
) {
  return Product.create(input);
}

export async function findProduct(
  query: FilterQuery<ProductInput>,
  options: QueryOptions = { lean: true }
) {
  return Product.findOne(query, {}, options);
}

export async function findAndUpdateProduct(
  query: FilterQuery<ProductInput>,
  update: UpdateQuery<ProductInput>,
  options: QueryOptions
) {
  return Product.findOne(query, update, options);
}

export async function deleteProduct(query: FilterQuery<ProductInput>) {
  return Product.deleteOne(query);
}
