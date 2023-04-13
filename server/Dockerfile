FROM node:18.15.0-alpine3.16 AS base

RUN npm i -g pnpm --latest

FROM base AS dependencies

WORKDIR /app
COPY package.json ./
RUN pnpm install

FROM dependencies AS build

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
ENV NODE_PATH=dist/
RUN pnpm build

FROM build AS development

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=dependencies /app/node_modules ./node_modules
CMD pnpm dev:local