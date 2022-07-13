#!/usr/bin/env bash
set -xe

image=$( cat image )

sh ${SHARED_SCRIPTS_DIR}/sh/deploy-argocd.sh \
  -p "applications/prod/lnd/news-service/news-service.yaml" \
  -k "deploy/k8s/prod" \
  -i $image
