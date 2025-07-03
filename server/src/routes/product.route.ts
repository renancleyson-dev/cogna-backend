import { Router } from "express";
import { showProduct, listProducts } from "../controllers/product.controller";

export const productsRouter = Router();
productsRouter.get("/", listProducts);
productsRouter.get("/:id", showProduct);
