import { IsString } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  name: string;
  @IsString()
  alpha2: string;
  @IsString()
  alpha3: string;
  currencies: number[];
  deleted: boolean = false;
}
