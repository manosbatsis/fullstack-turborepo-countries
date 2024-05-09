import { Test, TestingModule } from '@nestjs/testing';
import { CountryService } from './country.service';
import { PrismaService } from '../prisma/prisma.service';

describe('CountryService', () => {
  let service: CountryService;
  let findUniqueMock: jest.Mock;

  beforeEach(async () => {
    findUniqueMock = jest.fn();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountryService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: findUniqueMock,
            },
          },
        },
      ],
    }).compile();

    service = module.get<CountryService>(CountryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
