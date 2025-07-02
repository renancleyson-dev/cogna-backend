FROM node:22.17-alpine

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install

COPY . .

EXPOSE 8080

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Only build in production
RUN if [ "$NODE_ENV" = "production" ]; then pnpm build; fi

CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then pnpm start; else pnpm dev; fi" ]