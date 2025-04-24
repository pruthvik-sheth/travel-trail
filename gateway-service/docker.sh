#!/bin/bash

./gradlew clean build
docker build -t dhairya22/shareitinerary:gateway-amd64 --platform linux/amd64 .
docker build -t dhairya22/shareitinerary:gateway-arm64 --platform linux/arm64 .
docker push dhairya22/shareitinerary:gateway-amd64
docker push dhairya22/shareitinerary:gateway-arm64
docker manifest create dhairya22/shareitinerary:gateway-latest dhairya22/shareitinerary:gateway-amd64 dhairya22/shareitinerary:gateway-arm64
docker manifest push dhairya22/shareitinerary:gateway-latest