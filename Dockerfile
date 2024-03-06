FROM node:18 AS base

FROM base AS deps

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUM \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN mkdir -p /app/.next /app/public

USER root

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN chown -R nextjs:nodejs /app

COPY --from=builder /app/.next app/.next
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public /app/public
COPY --from=builder /app/next.config.js /app/.next/config.js
COPY --from=builder /app/.next/BUILD_ID /app/.next/BUILD_ID
COPY --from=builder r /app/.next/static /app/.next/static
COPY --from=builder /app/.next/routes-manifest.json /app/.next/routes-manifest.json
COPY --from=builder /app/.next/prerender-manifest.json /app/.next/prerender-manifest.json
COPY --from=builder /app/.next/prerender-manifest.json /app/.next/prerender-manifest.json
COPY --from=builder /app/.next/prerender-manifest.json /app/.next/prerender-manifest.json
COPY --from=builder /app/.next/prerender-manifest.json /app/server/pages-manifest.json
COPY --from=builder /app/.next/prerender-manifest.json /app/.next/prerender-manifest.json

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
CMD ["npm", "start"]
