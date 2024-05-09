# fullstack-turborepo-countries [![CI](https://github.com/manosbatsis/fullstack-turborepo-countries/actions/workflows/ci.yml/badge.svg)](https://github.com/manosbatsis/fullstack-turborepo-countries/actions/workflows/ci.yml)

WIP for trying out [turborepo](https://turbo.build/), [prisma](https://www.prisma.io/) and [react native](https://reactnative.dev).


## Prerequisites

- Docker
- Docker Compose
- Node v20
- NPM v10

## Installation

```bash
$ npm install
```

## Running the app

Create an environment file or copy the sample docker one:

```bash 
cp .env.example .env
```

Maybe launch a postgres with docker compose... 

```bash 
docker-compose up
```

Init and seed the DB

```bash 
npx prisma migrate dev && npx prisma db seed

```

Launch for development

```bash 
npm run start
```

Watch mode

```bash 
npm run start:dev
```

Production mode
```bash 
npm run start:prod
```

## Test

Try out the Swagger UI at http://localhost:3000/api

Run unit tests

```bash 
npm run test
```

Run e2e tests with [testcontainers](https://node.testcontainers.org/) for postgres
```bash 
npm run test:e2e
```

Test coverage

```bash 
npm run test:cov
```

