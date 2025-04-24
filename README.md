# Git Workshop Application

A simple Node.js application that serves "Hello World!" on port 3000.

## Prerequisites

- Node.js (for local development)
- Docker and Docker Compose (for containerized deployment)

## Local Development

1. Clone the repository with submodules:
   ```
   git clone --recurse-submodules https://github.com/lhtrajnishsingh/git-workshop.git
   cd git-workshop
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```

4. Access the application at http://localhost:3000

## Deployment with Docker

1. Build and start the container:
   ```
   docker-compose up -d
   ```

2. Access the application at http://localhost:3000

3. Stop the container:
   ```
   docker-compose down
   ```

## Manual Deployment Steps

If you prefer to deploy without Docker:

1. Clone the repository with submodules:
   ```
   git clone --recurse-submodules https://github.com/lhtrajnishsingh/git-workshop.git
   cd git-workshop
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   node app.js
   ```

4. Access the application at http://localhost:3000
