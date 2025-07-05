# Test Cogna Project

This repository contains a multi-service application with two main components:

- **server**: The backend API service.
- **web**: The fullstack web application.

Each service has its own README file with specific setup and usage instructions.  
**Please refer to `/server/README.md` and `/web/README.md` for details about each service.**

## Running with Docker Compose

To start the entire project using Docker Compose:

1. **Set up environment variables:**
    ```
    cp server/.env.example server/.env
    cp web/.env.example web/.env
    ```

2. **Run docker compose for development**
    ```sh
    docker compose -f docker-compose-app/docker-compose.dev.yml up --build
    ```

---

## Technical choices

* **Monorepo like project**: According to the test, the project should be a Github repository and it would be good to setup Docker/Docker Compose with CI/CD pipelines. The best way to handle it with a fullstack NextJS application and a separate ExpressJS backend was making it into a monorepo to setup single pipelines to handle both services.
* **Shared types**: with monorepo, I was able to use the types for API responses from the backend into the frontend.
* **Backend folder structure**: I tried to make layers with clear separation of concerns with a 'core' layer that would handle application logic, so I used:
  * classic Controller pattern with plain functions as Express route handlers
  * Repository pattern as the core layer
  * Data layer for DTO and validating API input
  * Services for external services and logic unrelated to data storage, like the anononymous signIn logic
* **Anonymous authentication**: Since it was stated on the test description about possibly making an fake login, I implemented an anonymous authentication with JWT tokens.
