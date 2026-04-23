FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
COPY data ./data

RUN npm run build

EXPOSE 3000

ENV BACKEND_PORT=3000

CMD ["sh", "-c", "if [ -f /app/data/provider-unified.json ]; then node dist/main.js --port ${BACKEND_PORT} --data /app/data/provider-unified.json; else node dist/main.js --port ${BACKEND_PORT} --data /app/data/provider-alpha.json,/app/data/provider-beta.json,/app/data/provider-gamma.json; fi"]

