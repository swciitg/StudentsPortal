FROM node:18-alpine  AS builder
WORKDIR /code/Frontend
COPY ./Frontend .
RUN ls /code
RUN npm install --legacy-peer-deps && npm run build

FROM node:18-alpine  AS server
WORKDIR /code/Backend
RUN ls /code
COPY --from=builder /code/Frontend/build ./build
COPY ./Backend .
RUN npm install

EXPOSE 3002

CMD ["node", "app.js"]