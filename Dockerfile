# Dockerfile

# Base stage for installing pnpm
FROM node:20-alpine AS base
RUN npm install -g pnpm
WORKDIR /app

# Builder stage for building the application
FROM base AS builder
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/client/package.json ./apps/client/
COPY apps/server/package.json ./apps/server/
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Production stage
FROM base AS production
COPY --from=builder /app/apps/server/dist ./dist
COPY --from=builder /app/apps/client/dist ./dist/public
COPY package.json pnpm-workspace.yaml ./
COPY apps/server/package.json ./apps/server/
RUN pnpm install --prod --filter=REST
ENV NODE_ENV=production
ENV PORT=80
EXPOSE 80
CMD [ "pnpm", "start" ]