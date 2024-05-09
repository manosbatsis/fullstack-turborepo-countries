import { Country } from './country.entity';

export class Currency {
  id:      Number
  alphabeticCode: String
  numericCode:    String
  minorUnit:      Number
  locations:      Country[]
}
