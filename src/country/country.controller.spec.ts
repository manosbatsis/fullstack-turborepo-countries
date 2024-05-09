import { Test, TestingModule } from '@nestjs/testing';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

describe('CountryController', () => {
  let controller: CountryController;
  let getByCodeMock: jest.Mock;

  beforeEach(async () => {
    getByCodeMock = jest.fn();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [
        CountryService,
        {
          provide: CountryService,
          useValue: {
            findOne: getByCodeMock,
          },
        },
      ],
    }).compile();

    controller = module.get<CountryController>(CountryController);
  });



  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
