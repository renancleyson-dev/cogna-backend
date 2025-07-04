import jwt from "jsonwebtoken";
import { CONFIG } from "../config";

export function isAuthenticated(token: string) {
  try {
    return jwt.verify(token, CONFIG.SECRET_KEY);
  } catch {
    return false;
  }
}

export function anonSignIn(email: string) {
  return jwt.sign({ email, role: "anon" }, CONFIG.SECRET_KEY, {
    expiresIn: "1d",
  });
}
