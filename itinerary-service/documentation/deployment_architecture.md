# TravelTrail: System Architecture

![TravelTrail Architecture](/documentation/images/TravelTrail_Arch.jpg)

## System Overview

TravelTrail is accessible via the domain `TravelTrail.live`, providing a seamless experience for users across both mobile and desktop platforms. The architecture leverages Google Cloud Platform services for cost-effective learning and development.

## Infrastructure Components

### DNS Management

- **Provider**: Name.com (via GitHub Student Developer Pack)
- **Benefits**: Free domain name and SSL certificates for one year
- **Function**: Routes user requests to the GCP Load Balancer

### GCP Load Balancer

- **Type**: HTTP(S) external Application Load Balancer
- **Creation**: Automatically provisioned when Kubernetes Ingress is defined
- **Monitoring**: Configured with periodic health checks using Spring Boot Actuator
- **Configuration**: Implemented via `backend-config` Kubernetes objects

### GCP Ingress Controller

- **Purpose**: Routes incoming traffic to appropriate backend services
- **Selection Rationale**: Native GCP controller chosen for:
  - Automatic creation with Ingress objects
  - Seamless integration with GKE
  - Simplified configuration process
  - Built-in debugging capabilities

![GKE Ingress Controller](/documentation/images/Ingress_Controller.png)

### Kubernetes Components

#### Ingress Object

- **Function**: Exposes HTTP/HTTPS routes from outside to services within the cluster
- **Advantage**: Provides a single entry point for all traffic to the Kubernetes cluster
- **Implementation**: Defines routing rules that direct requests to appropriate services
- **Integration**: Works with GKE Ingress controller to initiate load balancers

#### Services

- **Type**: NodePort
- **Function**: Exposes applications running as Pods to the Ingress
- **Operation**: Exposes each Node's IP at static ports for routing

#### Deployments

- **Purpose**: Ensures desired number of Pods are running
- **Responsibilities**:
  - Maintains application availability
  - Handles updates and rollbacks
  - Replaces failed Pods automatically

#### Pods

- **Definition**: Smallest deployable units in Kubernetes
- **Contents**: Typically one container with application code, settings, and dependencies
- **Function**: Runs the actual application components

## Design Decisions

### Cloud Provider Selection

While AWS dominates the industry, GCP was selected for:

- $300 free credits for new users
- Lower project costs
- Equivalent learning opportunities
- Easily transferable configurations to AWS if needed

### Ingress Implementation

Multiple options exist (NGINX, Contour, Istio), but GCP's native controller was chosen for:

- Automatic creation with Ingress objects
- Simplified configuration
- Integrated dashboards
- Automatic load balancer provisioning
