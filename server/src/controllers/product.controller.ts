import type { Request, Response } from "express";
import {
  getAllProducts,
  getProductById,
} from "../repositories/product.repository";
import { countResource } from "../utils/query";
import { toProductDTO } from "../data/product.data";

export async function listProducts(req: Request, res: Response) {
  const { page: qPage, perPage: qPerPage } = req.query;
  if (qPage && Number.isNaN(Number(qPage))) {
    res.status(400).json({ error: "Invalid page number" });
    return;
  }
  if (qPerPage && Number.isNaN(Number(qPerPage))) {
    res.status(400).json({ error: "Invalid perPage number" });
    return;
  }

  const page = parseInt(qPage as string) || 1;
  const perPage = parseInt(qPerPage as string) || 10;
  const offset = (page - 1) * perPage;

  const total = await countResource("product", "id");
  const products = await getAllProducts({
    limit: perPage,
    offset: offset,
  });

  res.status(200).json({
    page,
    perPage,
    total,
    result: products.map(toProductDTO),
    totalPages: Math.ceil(total / perPage),
  });
}

export async function showProduct(req: Request<{ id: string }>, res: Response) {
  const productId = parseInt(req.params.id);
  if (Number.isNaN(productId)) {
    res.status(400).json({ error: "Invalid product ID" });
    return;
  }

  const product = await getProductById(productId);

  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  }

  res.status(200).json(toProductDTO(product));
}
