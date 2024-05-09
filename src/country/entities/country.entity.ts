import { Currency } from './currency.entity';

export class Country {
  id: number;
  name: string;
  alpha2: string;
  alpha3: string;
  currencies: Currency[];
  deleted: boolean;
}
