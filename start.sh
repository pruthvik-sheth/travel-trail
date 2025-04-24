#!/bin/bash

minikube start

# applying all the itinerary-service files to the cluster
find itinerary-service/k8s/ -name "*.yml" ! -name "webapp.yml" ! -name "webapp-config.yml" -print0 | xargs -0 -I {} kubectl apply -f {}
kubectl apply -f itinerary-service/k8s-local/webapp.yml


# applying all the gateway-service files to the cluster
kubectl apply -f gateway-service/k8s-local/gateway.yml
