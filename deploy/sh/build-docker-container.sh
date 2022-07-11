#!/usr/bin/env bash
set -xe

while getopts ":r:" opt; do
  case $opt in
    r) RELEASE="$OPTARG"
    ;;
    \?) echo "Invalid option -$OPTARG" >&2
    ;;
  esac
done

. deploy/config/app.config
. ${SHARED_SCRIPTS_DIR}/sh/functions/get-application-image-name.sh

IMAGE="$( get_application_image_name ):$( get_application_prerelease_version )"
if [[ -n "$RELEASE" ]]
then
  IMAGE=$( cat image )
fi

/kaniko/executor \
  --context $CI_PROJECT_DIR \
  --dockerfile deploy/docker/Dockerfile \
  --destination ${IMAGE} 