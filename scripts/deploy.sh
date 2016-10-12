#!/bin/bash

# Exit on any error
set -e

sudo /opt/google-cloud-sdk/bin/gcloud docker push gcr.io/${PROJECT_NAME}/aksite
sudo chown -R ubuntu:ubuntu /home/ubuntu/.kube
kubectl patch deployment app -p '{"spec":{"template":{"spec":{"containers":[{"name":"app","image":"gcr.io/sonic-glazing-711/aksite:'"$CIRCLE_SHA1"'"}]}}}}'
