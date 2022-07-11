#!/usr/bin/env bash
set -xe

DATABASE_URL=${DATABASE_URL_DEV} npx prisma migrate dev --name init

image=$( cat image )

sh ${SHARED_SCRIPTS_DIR}/sh/deploy-argocd.sh \
  -p "applications/dev/lnd/news/news.yaml" \
  -k "deploy/k8s/dev" \
  -i $image
