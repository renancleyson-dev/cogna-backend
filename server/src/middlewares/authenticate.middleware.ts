import type { Request, Response } from "express";
import { isAuthenticated } from "../services/auth.service";

export async function authenticate(
  req: Request,
  res: Response,
  next: () => void,
) {
  const token = req.headers.authorization?.split(" ")[1];
  if (token && isAuthenticated(token)) {
    next();
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
