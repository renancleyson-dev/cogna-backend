import type { Request, Response } from "express";
import { CONFIG } from "../config";

export function authenticate(req: Request, res: Response, next: () => void) {
  const token = req.headers.authorization?.split(" ")[1];
  if (token && token === CONFIG.SECRET_KEY) {
    next();
  } else {
    res.status(401).json({ message: "A Secret Key is required" });
  }
}
