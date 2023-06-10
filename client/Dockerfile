FROM node:18.13-alpine

RUN apk --no-cache add curl

RUN mkdir /app
WORKDIR /app
COPY package*.json ./

RUN npm i -g pnpm
RUN pnpm i

COPY tsconfig.json tsconfig.json
COPY public public
COPY codegen.ts codegen.ts
COPY index.html index.html
COPY vite.config.ts vite.config.ts
COPY src src
COPY .env .env
COPY tsconfig.node.json tsconfig.node.json

ARG VITE_GRAPHQL_API_URL
ENV VITE_GRAPHQL_API_URL ${VITE_GRAPHQL_API_URL}

CMD pnpm dev