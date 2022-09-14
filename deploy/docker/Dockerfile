FROM Link on github

COPY ./src /app/src
COPY ./server.js /app/main.js
COPY ./node_modules /app/node_modules
COPY ./package.json /app/package.json

WORKDIR /app

ARG version_number
ENV VERSION=$version_number