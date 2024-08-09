import { Request, Response } from "express";
import { get } from "lodash-es";
import {
  createProduct,
  findProduct,
  findAndUpdateProduct,
  deleteProduct,
} from "../service/product.service";
import {
  createProductInput,
  deleteProductInput,
  readProductInput,
  updateProductInput,
} from "../schema/product.schema";

export async function createProductHandler(
  req: Request<{}, {}, createProductInput["body"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const body = req.body;

  const productData = {
    user: userId,
    title: body.title,
    description: body.description,
    price: body.price,
    image: body.image,
    timestamps: new Date(),
  };

  const product = await createProduct(productData);
  return res.send(product);
}

export async function updateProductHandler(
  req: Request<updateProductInput["params"]>,
  res: Response
) {
  try {
    const userId = get(req, "user._id");
    if (!userId) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const productId = get(req, "params.productId");
    const update = req.body;
    const product = await findProduct({ productId });

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    if (product.user !== userId) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    const updatedProduct = await findAndUpdateProduct({ productId }, update, {
      new: true,
    });

    return res.send(updatedProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

export async function getProductHandler(
  req: Request<readProductInput["params"]>,
  res: Response
) {
  const productId = get(req, "params.productId");
  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }
  return res.send(product);
}

export async function deleteProductHandler(
  req: Request<deleteProductInput["params"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const productId = get(req, "params.productId");
  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  if (product.user !== userId) {
    return res.sendStatus(403);
  }
  await deleteProduct({ productId });
  return res.sendStatus(200);
}
