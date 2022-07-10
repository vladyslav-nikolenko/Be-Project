FROM node:alpine

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8080

CMD ["node", "./server.js"]