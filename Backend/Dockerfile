FROM node:18-alpine  AS server
WORKDIR /code
COPY . .
RUN npm install
RUN npm start

EXPOSE 3002

CMD ["node", "app.js"]