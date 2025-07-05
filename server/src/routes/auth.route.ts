import { Router } from "express";
import { signIn } from "../controllers/auth.controller";
import { jsonOnly } from "../middlewares/json-only.middleware";

export const authRouter = Router();
authRouter.post("/anonymous", jsonOnly, signIn);
