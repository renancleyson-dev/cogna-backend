import type { Router } from "express";
import { getIndex } from "../controllers/index.controller";

export function setRoutes(app: Router) {
  app.get("/api", getIndex);
}
