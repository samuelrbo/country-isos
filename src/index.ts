import * as fs from 'fs';
import { ICountryIso } from './interfaces/country-iso.interface';
import { IIsoCode } from './interfaces/iso-code.interface';
import { IIsoCurrency } from './interfaces/iso-currency.interface';

export const countryIsos: ICountryIso[] = JSON.parse(
  fs.readFileSync('./data/country-isos.json').toString()
);

export const countryCodes: IIsoCode[] = JSON.parse(
  fs.readFileSync('./data/country-codes.json').toString()
);

export const currencyCodes: IIsoCurrency[] = JSON.parse(
  fs.readFileSync('./data/currency-codes.json').toString()
);
