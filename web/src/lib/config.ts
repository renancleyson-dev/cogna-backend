const {
  env: { NODE_ENV, API_URL },
} = process;

const REQUIRED_ENV = {
  API_URL,
};

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
};
