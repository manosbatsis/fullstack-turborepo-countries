# fullstack-turborepo-countries

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

Copy the sample docker env:

```bash 
cp .env.example .env
```

Maybe launch a postgres with docker compose... 

```bash 
docker-compose up
```

... init and seed it

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

