import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import { Client } from 'pg';
import { PrismaService } from '../src/prisma/prisma.service';
import { execSync } from 'child_process';

let postgresContainer: StartedPostgreSqlContainer;
let postgresClient: Client;
let prismaService: PrismaService;

beforeAll(async () => {
  //connect our container
  postgresContainer = await new PostgreSqlContainer().start();
  const env = process.env;
  process.env = { ...env };

  postgresClient = new Client({
    host: postgresContainer.getHost(),
    port: postgresContainer.getPort(),
    database: postgresContainer.getDatabase(),
    user: postgresContainer.getUsername(),
    password: postgresContainer.getPassword(),
  });

  await postgresClient.connect();
  //Set new database Url
  const databaseUrl = `postgresql://${postgresClient.user}:${postgresClient.password}@${postgresClient.host}:${postgresClient.port}/${postgresClient.database}`;
  // Execute Prisma migrations
  process.env = { ...env, DATABASE_URL: databaseUrl };
  execSync('npx prisma migrate dev && npx prisma db seed', {
    env: process.env,
  });
  //Set prisma instance
  prismaService = new PrismaService({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
    log: ['query'],
  });
  console.log('connected to test db...');
});

afterAll(async () => {
  //Stop container as well as postgresClient
  await postgresClient.end();
  await postgresContainer.stop();
  console.log('test db stopped...');
});
// add some timeout until containers are up and working
jest.setTimeout(60*1000);
export { postgresClient, prismaService };
