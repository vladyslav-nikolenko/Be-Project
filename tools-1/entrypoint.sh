#!/bin/bash
if [ "$NODE_ENV" = "development" ]; then
  yarn dev
fi
if [ "$NODE_ENV" = "production" ]; then
  yarn start:prod
fi