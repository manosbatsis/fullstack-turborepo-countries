import { Test, TestingModule } from '@nestjs/testing';
import { ConsoleLogger, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { prismaService } from './setupTests.e2e';
import { PrismaService } from '../src/prisma/prisma.service';
import { AppModule } from '../src/app.module';

describe('CountryController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(PrismaService)
      .useValue(prismaService)
      .setLogger(new ConsoleLogger())
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('when all countries are requested then status is OK', () => {
    return request(app.getHttpServer())
      .get('/country')
      .expect(200);
  });

  it('when valid alpha2 is requested then status is OK', () => {
    return request(app.getHttpServer())
      .get('/country/US')
      .expect(200);
  });

  it('when valid alpha3 is requested then status is OK', () => {
    return request(app.getHttpServer())
      .get('/country/USA')
      .expect(200);
  });

  it('when invalid country code is requested then status is 500', () => {
    return request(app.getHttpServer())
      .get('/country/FOOBAR')
      .expect(500);
  });
});
