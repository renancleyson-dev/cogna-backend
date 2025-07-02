# Test Cogna Project

This repository contains a multi-service application with two main components:

- **server**: The backend API service.
- **web**: The fullstack web application.

Each service has its own README file with specific setup and usage instructions.  
**Please refer to `/server/README.md` and `/web/README.md` for details about each service.**

## Running with Docker Compose

To start the entire project using Docker Compose:

```sh
docker-compose -f docker-compose-app/docker-compose.yml up --build
```

For development mode:

```sh
docker-compose -f docker-compose-app/docker-compose.dev.yml up --build
```

This will build and run both the backend and frontend services.

---

For more information about each service, check their respective README
