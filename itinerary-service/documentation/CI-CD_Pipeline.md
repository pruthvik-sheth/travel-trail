# TravelTrail: CI/CD Pipeline Documentation

![TravelTrail CI/CD Pipeline](/documentation/images/TravelTrail_CI_CD.png)

## Overview

This document details the Continuous Integration and Continuous Deployment (CI/CD) pipeline implemented for the TravelTrail project. The pipeline automates testing, building, containerization, and deployment processes, ensuring consistent and reliable delivery to the Google Kubernetes Engine (GKE) environment.

## Pipeline Workflow

### 1. Code Management

- **Trigger**: Push to main branch on GitHub
- **Action**: Initiates CircleCI pipeline automatically

### 2. Build & Test Phase

- **JAR Building**: Compiles source code after successful unit tests
- **Testing**: Validates individual components function as expected
- **Output**: Production-ready JAR file

### 3. Containerization

- **Multi-Architecture Support**:
  - Builds images compatible with both AMD64 and ARM64 architectures
  - Ensures deployment flexibility across various compute environments
- **Process**: Single CircleCI job handles both JAR building and Docker image creation

### 4. Docker Registry

- **Registry**: DockerHub
- **Authentication**: Secure credentials stored in CircleCI organization context
- **Tagging**: Images tagged with `latest` for immediate identification

### 5. Integration Testing

- **Environment**: TestContainers-managed database instances
- **Scope**: Verifies component interactions within the complete application
- **Infrastructure**: Runs on CircleCI's Linux VM with pre-installed Java and Docker

### 6. Cloud Deployment

- **Manual Approval**: Required before production deployment
- **GCP Authorization**: Service account credentials securely stored in CircleCI
- **Tooling**: Installs `kubectl` and other necessary cloud utilities
- **Cluster Connection**: Establishes secure connection to GKE cluster
- **Configuration**: Applies Kubernetes manifests for service deployment
- **Networking**: Configures ingress controller and L7 load balancer for public access

## Technology Stack

### Development & Version Control

- **GitHub**: Remote code repository with Git versioning

### CI/CD Platform

- **CircleCI**:
  - Customizable workflows with parallel job execution
  - Reusable configurations via orbs
  - Docker integration
  - Secure environment variable management
  - 6,000 free build minutes monthly

### Containerization

- **Docker**: Container creation and management
- **DockerHub**: Container registry with free private repository

### Cloud Infrastructure

- **Google Cloud Platform**:
  - Kubernetes Engine (GKE) for container orchestration
  - Load balancing for public access
  - Comprehensive documentation and learning resources

## Future Enhancements

### Environment Expansion

- **Development Environment**: For experimental features and testing
- **Staging Environment**: Production mirror for final validation

### Testing Improvements

- **Smoke Tests**: Post-deployment validation in staging environment
