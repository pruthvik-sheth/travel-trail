# share-itinerary project local setup

## Resources:

1. Make sure you have docker installed on your system, if not visit the below link and follow the appropriate steps for your machine:
   1. [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
2. Install minikube to run Kubernetes cluster on your machine locally.
   1. [https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fbinary+download](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fbinary+download)
3. We also require ingress controller running inside our minikube, run below command to setup ingress controller

   `minikube addons enable ingress`

## Workflow:

1. Clone the repository
   1. `git clone https://github.com/DhairyaPatel2210/share-itinerary.git`
2. Make sure your docker desktop is running
3. Open terminal inside the cloned repository share-itinerary
4. run this command to start micro-services inside the Kubernetes cluster
   1. `sh start.sh`
5. In the same terminal, write the command to create ingress object and to start ingress controller.
   1. `kubectl apply -f itinerary-service/k8s-local/minikube-ingress.yml`
6. Open new terminal, this terminal will be blocked and won’t be used for other purpose. Write and execute
   1. `minikube tunnel`
7. If everything goes right, we should have our web application up and running.
8. We can test it through the postman by making below **POST** request.

   1. [`http://127.0.0.1/itineraryservice/v1/itineraries`](http://127.0.0.1/itineraryservice/v1/itineraries)
   2. Pass this JSON object in the request:

      ```json
      {
        "name": "Dubai",
        "summary": "Visited Dubai",
        "day_count": 5,
        "days": [
          {
            "day_no": 1,
            "date": "2024-09-14",
            "activities": [
              {
                "title": "Dubai Mall Visit",
                "images": [
                  {
                    "link": "https://bda-project.s3.us-west-1.amazonaws.com/image_temp.jpg"
                  }
                ],
                "description": "There were 40 international shops inside Dubai Mall",
                "location": {
                  "name": "Dubai Mall",
                  "latitude": 25.199514,
                  "longitude": 55.277397
                }
              }
            ]
          }
        ]
      }
      ```

   3. **Note:** As we are making tunnel directly to the ingress controller, it is making our Kubernetes cluster available to us on this(**`127.0.0.1`**) address.

9. To remove all the resources from Kubernetes cluster, run this command:
   `kubectl delete --all deployments,services,pods,replicasets,configmaps,secrets,ingresses,roles,rolebindings,serviceaccounts`
10. Finally, to stop the minikube cluster execute this:
    1. `minikube stop`
