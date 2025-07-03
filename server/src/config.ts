import type { CorsOptions } from "cors";

const {
  env: {
    NODE_ENV,
    PORT,
    ALLOWED_ORIGINS,
    DB_USER,
    SECRET_KEY,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
  },
} = process;

const REQUIRED_ENV = [PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME];

export function validateEnv() {
  if (REQUIRED_ENV.some((envVar) => !envVar)) {
    throw new Error(
      "Missing required environment variables. Please check your .env file.",
    );
  }
}

export const CONFIG = {
  ENV: NODE_ENV,
  PORT: Number(PORT),
  SECRET_KEY,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT: Number(DB_PORT),
};

export function getCorsCofig(): CorsOptions {
  if (CONFIG.ENV === "production") {
    return {
      origin: ALLOWED_ORIGINS ? ALLOWED_ORIGINS.split(",") : [],
      optionsSuccessStatus: 200,
    };
  }

  return {
    origin: "*",
    optionsSuccessStatus: 200,
  };
}
