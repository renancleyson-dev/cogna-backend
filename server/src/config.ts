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

const REQUIRED_ENV = {
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  SECRET_KEY,
};

export function validateEnv() {
  for (const [key, value] of Object.entries(REQUIRED_ENV)) {
    if (!value) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }
}

function castRequiredConfig() {
  type NonUndefined<T> = {
    [K in keyof T]-?: Exclude<T[K], undefined>;
  };

  return { ...REQUIRED_ENV } as NonUndefined<typeof REQUIRED_ENV>;
}

const requiredConfig = castRequiredConfig();
export const CONFIG = {
  ...requiredConfig,
  ENV: NODE_ENV,
  PORT: Number(PORT),
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
