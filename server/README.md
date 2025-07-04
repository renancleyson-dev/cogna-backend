# Cogna Test Backend

This is a basic Express application built with TypeScript.

## Setup Instructions

Node v22.17.0

pnpm v9.15.0

Postgres 16

1. **Clone the repository:**
   ```
   git clone https://github.com/renancleyson-dev/cogna-backend.git
   cd cogna-backend
   ```

2. **Install dependencies:**
   ```
   pnpm install
   ```

3. **Set up environment variables:**
   ```
   cp .env.example .env
   ```
   Define your database variables and others a needed

1. **Compile TypeScript:**
   ```
   pnpm build
   ```

2. **Run the application:**
   ```
   pnpm start
   ```

   For development with hot-reload:
   ```
   pnpm dev
   ```

3. **Migrate database**
   ```
   pnpm run migrate
   ```

## Usage

Once the application is running, you can access it at `http://localhost:8000`.

## Project Structure

- `src/app.ts`: Express app setup (middlewares and routes).
- `src/server.ts`: Starts the server.
- `src/config.ts`: Loads and validates environment variables, configures CORS.
- `src/controllers/`: Contains functions handling repositories for a specific route.
- `src/routes/`: Contains application route-controller mappings, each `<route-path>.route.ts` defines the routing for that filename's base route
- `src/repositories/`: Contains application logic functions inspired by the Repository Pattern.
- `src/data/`: DTO and validation layer.
- `src/services`: Contains any logic related to external services or separated from the database.
- `src/db/`: Database settings, migrations, and seeds.

## Conventions

- No default import to avoid inconsistency among files importing from the same default import