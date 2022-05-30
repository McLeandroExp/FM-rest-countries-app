import { Currencies, Region } from "./countriesResponse";

export interface CountriesState {
  countries?: country[];
  continent? : country[];
}
export interface country {
  name: string;
  nativeName : string | undefined;
  population: number;
  region: Region;
  subregion: string | undefined;
  capital: string | undefined;
  domain: string | undefined;
  currencies: Currencies | undefined;
  languages: string | undefined;
  "border-countries": string | undefined;
  "img": string | undefined
}
