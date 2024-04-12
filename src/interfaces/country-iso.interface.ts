import { IIsoCode } from "./iso-code.interface"
import { IIsoCurrency } from "./iso-currency.interface";

export interface ICountryIso {
  country: string;
  code: IIsoCode,
  currency: IIsoCurrency | {}
}
