# syntax=docker/dockerfile:1

# Make build args global so they can be used in any FROM
ARG NODE_VERSION=18-alpine
ARG NGINX_VERSION=1.27-alpine

# ---------- Build stage ----------
FROM node:${NODE_VERSION} AS build

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install deps first for better caching
COPY package*.json ./
RUN npm ci --no-audit --no-fund || npm install --no-audit --no-fund

# Copy the rest and build (exports to /app/out)
COPY . .
RUN npm run build

# ---------- Runtime stage ----------
FROM nginx:${NGINX_VERSION} AS runtime

# Serve on 8080 (avoid root-only 80 in some environments)
ENV PORT=8080
EXPOSE 8080

# Copy static export
COPY --from=build /app/out /usr/share/nginx/html

# Minimal config
RUN rm -f /etc/nginx/conf.d/default.conf && \
    printf '%s\n' '\
server { \
  listen 8080; \
  server_name _; \
  root /usr/share/nginx/html; \
  index index.html; \
  gzip on; \
  gzip_comp_level 5; \
  gzip_types text/plain text/css application/javascript application/json image/svg+xml; \
  location /_next/ { \
    try_files $uri $uri/ =404; \
    add_header Cache-Control "public,max-age=31536000,immutable"; \
  } \
  location / { \
    try_files $uri $uri/ /404.html; \
  } \
} \
' > /etc/nginx/conf.d/next-export.conf

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
