import { Country } from './country.entity';

export class Currency {
  id: number;
  alphabeticCode: string;
  numericCode: string;
  minorUnit: number;
  locations: Country[];
}
