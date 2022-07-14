FROM gitlab.godeltech.com:4567/javascript/compliance/k8s/docker-images/node:latest

COPY ./src /app/src
COPY ./server.js /app/main.js
COPY ./node_modules /app/node_modules
COPY ./package.json /app/package.json

WORKDIR /app

ARG version_number
ENV VERSION=$version_number