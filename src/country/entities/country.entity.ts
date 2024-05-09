import { Currency } from './currency.entity';

export class Country {
  id   :      Number
  name   :    String
  alpha2  :   String
  alpha3  :   String
  currencies: Currency[]
  deleted:    Boolean
}
