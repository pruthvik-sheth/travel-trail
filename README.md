# Travel-Trail: Local Development Setup

This guide will walk you through setting up the Share-Itinerary project locally using Docker and Kubernetes.

## Prerequisites

- **Docker**: Required to run containerized applications

  - [Install Docker](https://docs.docker.com/engine/install/)

- **Minikube**: For running a local Kubernetes cluster
  - [Install Minikube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fbinary+download)

## Setup Steps

### 1. Environment Preparation

1. Clone the repository:

   ```bash
   git clone https://github.com/DhairyaPatel2210/share-itinerary.git
   ```

2. Ensure Docker Desktop is running

3. Enable the Ingress controller in Minikube:
   ```bash
   minikube addons enable ingress
   ```

### 2. Application Deployment

1. Navigate to the project directory:

   ```bash
   cd share-itinerary
   ```

2. Start the microservices:

   ```bash
   sh start.sh
   ```

3. Create the Ingress object:

   ```bash
   kubectl apply -f itinerary-service/k8s-local/minikube-ingress.yml
   ```

4. Open a new terminal window and run the Minikube tunnel (leave this terminal running):
   ```bash
   minikube tunnel
   ```

### 3. Testing the Application

Use Postman to test the application with a POST request:

- **URL**: `http://127.0.0.1/itineraryservice/v1/itineraries`
- **Method**: POST
- **Body**: JSON (see example below)

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

> **Note**: The Minikube tunnel makes your Kubernetes cluster accessible at `127.0.0.1`

### 4. Cleanup

When finished with development:

1. Remove Kubernetes resources:

   ```bash
   kubectl delete --all deployments,services,pods,replicasets,configmaps,secrets,ingresses,roles,rolebindings,serviceaccounts
   ```

2. Stop the Minikube cluster:
   ```bash
   minikube stop
   ```
