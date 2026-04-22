FROM alpine:3.21

COPY backend /usr/local/bin/backend
COPY data/ /data/

RUN chmod +x /usr/local/bin/backend

WORKDIR /data
EXPOSE 3000

ENV BACKEND_PORT=3000

ENTRYPOINT ["sh", "-c", "backend --port ${BACKEND_PORT} --data /data/provider-alpha.json,/data/provider-beta.json,/data/provider-gamma.json"]

## 
## FROM alpine:3.21
## 
## COPY backend0 /usr/local/bin/backend
## COPY data/ /data/
## 
## RUN chmod +x /usr/local/bin/backend
## 
## WORKDIR /data
## EXPOSE 3000
## 
## ENV BACKEND_PORT=3000
## 
## ENTRYPOINT ["sh", "-c", "if [ -f /data/provider-unified.json ]; then backend --port ${BACKEND_PORT} --data /data/provider-unified.json; else backend --port ${BACKEND_PORT} --data /data/provider-alpha.json,/data/provider-beta.json,/data/provider-gamma.json; fi"]

