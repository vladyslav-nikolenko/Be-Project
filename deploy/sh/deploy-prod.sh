#!/usr/bin/env bash
set -xe

DATABASE_URL=${DATABASE_URL_PROD} npx prisma migrate deploy

image=$( cat image )

sh ${SHARED_SCRIPTS_DIR}/sh/deploy-argocd.sh \
  -p "applications/prod/lnd/news/news.yaml" \
  -k "deploy/k8s/prod" \
  -i $image
