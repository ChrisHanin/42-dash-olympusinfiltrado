FROM alpine:3.21

COPY backend /usr/local/bin/backend
COPY data/ /data/

RUN chmod +x /usr/local/bin/backend

WORKDIR /data
EXPOSE 3000

ENV BACKEND_PORT=3000

ENTRYPOINT ["sh", "-c", "if [ -f /data/provider-unified.json ]; then /usr/local/bin/backend --port ${BACKEND_PORT} --data /data/provider-unified.json; else /usr/local/bin/backend --port ${BACKEND_PORT} --data /data/provider-alpha.json,/data/provider-beta.json,/data/provider-gamma.json; fi"]

