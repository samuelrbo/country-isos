import { ICountryIso } from './interfaces/country-iso.interface';
import { IIsoCode } from './interfaces/iso-code.interface';
import { IIsoCurrency } from './interfaces/iso-currency.interface';

import jsonCountryIsos from './data/country-isos.json';
import jsonCountryCodes from './data/country-codes.json';
import jsonCurrencyCodes from './data/currency-codes.json';

export const countryIsos: ICountryIso[] = jsonCountryIsos
export const countryCodes: IIsoCode[] = jsonCountryCodes;
export const currencyCodes: IIsoCurrency[] = jsonCurrencyCodes;
