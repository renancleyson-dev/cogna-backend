# Cogna Test Frontend

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Route and fetching details

1. **index page(/)**
    The product list fetching with Server Side Rendering(SSR).

2. **Product detail (/produto/:id)**
    The product detail page fetches from the backend API and caches it.

3. **Anonymous Login (/login)**
    Since the test description stated that a fake auth session would be interesting, I decided to use an anonymous authentication with the server and web services. This is static rendered by NextJS.