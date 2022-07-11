FROM gitlab.godeltech.com:4567/javascript/compliance/k8s/docker-images/node:latest

COPY ./src /app/build
COPY ./node_modules /app/node_modules

WORKDIR /app/build/src

ARG version_number
ENV VERSION=$version_number