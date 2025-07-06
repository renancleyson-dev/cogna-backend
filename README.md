# Test Cogna Project

This repository contains a multi-service application with two main components:

- **server**: The backend API service. [Production URL](test-cogna-server-production.up.railway.app)
- **web**: The fullstack web application. [Production URL](test-cogna-web-production.up.railway.app)

Each service has its own README file with specific setup and usage instructions.  
**Please refer to `/server/README.md` and `/web/README.md` for details about each service.**

## Running with Docker Compose

To start the entire project using Docker Compose:

1. **Clone repository**
    ```
    git clone https://github.com/renancleyson-dev/cogna-backend.git
    cd cogna-backend
    ```
  
2. **Set up environment variables:**
    ```
    cp ./server/.env.example ./server/.env
    cp ./web/.env.example ./web/.env
    ```

3. **Run docker compose for development**
    ```sh
    docker compose -f docker-compose.dev.yml up -d
    ```

4. **Run migrations and seeds**
    ```sh
    docker compose -f docker-compose.dev.yml run server pnpm migrate-and-seed
    ```

    Finally, open [http://localhost:3000](http://localhost:3000) with your browser.

---

## Technical choices

* **Monorepo like project**: According to the test, the project should be a Github repository and it would be good to setup Docker/Docker Compose with CI/CD pipelines. The best way to handle it with a fullstack NextJS application and a separate ExpressJS backend was making it into a monorepo to setup single pipelines to handle both services.
* **Backend folder structure**: I tried to make layers with clear separation of concerns with a 'core' layer that would handle application logic, so I used:
  * Classic Controller pattern with plain functions as Express route handlers
  * Repository pattern as the core layer
  * Data layer for DTO and validating API input
  * Services for external services and logic unrelated to data storage, like the anononymous signIn logic
* **Anonymous authentication**: Since it was stated on the test description about possibly making an fake login, I implemented an anonymous authentication with JWT tokens.
* **Backend integration/unit testing, frontend e2e testing**: Since it's already a big application for a test. I only created simple tests on the backend and used cypress for e2e tests on the frontend codebase without any unit/integration testing on it since it was more valuable to test it with the backend
