import type { NextFunction, Request, Response } from "express";

export function jsonOnly(req: Request, res: Response, next: NextFunction) {
  if (
    req.method !== "GET" &&
    req.headers["content-type"] !== "application/json"
  ) {
    res.sendStatus(404);
    return;
  }

  next();
}
