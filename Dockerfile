ARG NODE_VERSION="20.14.0"

FROM node:${NODE_VERSION} AS base

WORKDIR /usr/src

ENV PNPM_HOME="/pnpm"

RUN corepack enable

COPY . .

FROM base AS dependencies

WORKDIR /usr/src

RUN --mount=id=dependencies,target=${PNPM_HOME}/store,type=cache \
	pnpm install --frozen-lockfile --prod

FROM base AS build

RUN --mount=id=dependencies,target=${PNPM_HOME}/store,type=cache \
	pnpm install --frozen-lockfile --prod

RUN pnpm run build

FROM gcr.io/distroless/nodejs20-debian12

ENV NODE_ENV="production"

COPY --from=build /usr/src/.next/ ./.next/

COPY --from=dependencies /usr/src/node_modules ./node_modules

USER nonroot:nonroot

CMD [ "./.next/standalone/server.js" ]