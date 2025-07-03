import cors from "cors";
import express from "express";
import { getCorsCofig } from "./config";
import { authenticate } from "./middlewares/authenticate.middleware";
import { setRoutes } from "./routes/index.route";

export const app = express();

app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  cors(getCorsCofig()),
  authenticate,
);

setRoutes(app);
