## Getting Started

To install the dependencies:

```bash
yarn install
# or simply 
yarn
```


First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Setup database

The database can run on docker or locally. To use the docker you need  `docker` installed on your machine.

```bash
# start
docker-compose up --build

# close 
docker-compose down
```

To run migrations to your database:

```bash
yarn db:migration:run
```

To create new migrations automatically when you create or update entities:

```bash
yarn db:migration:generate -n [MIGRATION_NAME]
```

To generate template for manual migrations:

```bash
yarn db:migration:create -n [MIGRATION_NAME]
```

Refer to [typeorm documentation](https://typeorm.io/#/migrations) to learn more about migrations.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
