import type { Router } from "express";
import { productsRouter } from "./product.route";
import { authRouter } from "./auth.route";
import { authenticate } from "../middlewares/authenticate.middleware";

export function setRoutes(app: Router) {
  app.use("/produtos", authenticate, productsRouter);
  app.use("/auth", authRouter);
}
