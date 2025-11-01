import {
  createProductHandler,
  updateProductHandler,
  getProductHandler,
  deleteProductHandler,
} from "../controller/product.controller";
import {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
} from "../schema/product.schema";

import { Router } from "express";

const router = Router();

router.post("/api/products", createProductHandler);

router.put("/api/products/:productId", updateProductHandler);

router.get("/api/products/:productId", getProductHandler);

router.delete("/api/products/:productId", deleteProductHandler);

export default router;
