# SvelteKit + Express Auth Template

A barebones authentication template using SvelteKit on the frontend and Express on the backend. Featuring Passport and Google OAuth 2.0 for the user authentication.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Maxson52/sveltekit-express-google-auth
```

Go to the project directory

```bash
  cd sveltekit-express-google-auth
```

Install dependencies and run client

```bash
  cd client
  npm install
  npm run dev
```

Install dependencies and run server

```bash
  cd server
  npm install
  npm run dev
```

Note:

> Environment variables on both the client and server need to be setup. See the `.env.example` file for reference

## Deployment

To deploy the server

```bash
  cd server
  npm run start
```

And the client (using your preferred [adapter](https://kit.svelte.dev/docs#adapters))

```bash
  cd client
  npm run build
```
