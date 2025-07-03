import type { Router } from "express";
import { productsRouter } from "./product.route";

export function setRoutes(app: Router) {
  app.use("/produtos", productsRouter);
}
