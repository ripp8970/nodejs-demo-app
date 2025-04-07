# Node.js Web App with CI/CD Pipeline and Docker

This is a basic Node.js application developed using CI/CD pipeline with Docker that starts a simple HTTP server. It listens on port 3000 and responds from file "app.js", when accessed in a web browser after pulling it from Docker Image.

## Getting Started

A Node.js web application with automated CI/CD pipeline using GitHub Actions and Docker.

## Features

- Express.js web server
- Automated testing and deployment
- Docker containerization
- GitHub Actions CI/CD pipeline
- Docker Hub image deployment

## Prerequisites

- Node.js
- Docker
- GitHub account
- Docker Hub account

## Quick Start

- Docker installed on your machine

- Access to Docker Hub (or your container registry)
    Since, CI/CD was completed successfully, pull the image from Docker Hub
    ```bash
     docker pull <your-docker-username>/nodejs-demo-app:latest
    ```
- Run the Container
    ```bash
     docker run -d -p 3000:3000 --name nodejs-app <your-docker-username>/nodejs-demo-app:latest
    ```
- Verify It's Running
    ```bash
     docker ps
    ```
  The container should be seen running.

- Access the Application
    ```bash
     http://localhost:3000
    ```