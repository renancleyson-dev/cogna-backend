FROM node:22.17-alpine AS base

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install

COPY . .

EXPOSE 8080

FROM base AS prod
ENV NODE_ENV=production
RUN pnpm exec next telemetry disable
RUN pnpm build
CMD ["pnpm", "start"]

FROM base AS dev
ENV NODE_ENV=development
CMD ["pnpm", "dev"]
