import type { Request, Response } from "express";
import { anonSignIn } from "../services/auth.service";
import { EMAIL_REGEX } from "../utils/constants";

function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && EMAIL_REGEX.test(email);
}

export async function signIn(req: Request, res: Response) {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ error: "Email is required" });
    return;
  }
  if (!isValidEmail(email)) {
    res.status(400).json({ error: "Email is invalid" });
    return;
  }

  const payload: SignIn = { token: anonSignIn(email) };
  res.status(201).json(payload);
}

export type SignIn = { token: string };
