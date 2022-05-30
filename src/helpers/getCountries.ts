import { useCountriesQuery } from "../api/countryApi";
import { useEffect } from "react";
import { country } from "../interfaces/countries";
import { useDispatch } from "react-redux";
import { addCountries } from "../slices/countriesSlice";

export const getCountries = () => {
  const { data, isSuccess } = useCountriesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      const countries: country[] = data
        .map((countryResp) => ({
          name: countryResp.name.common,
          nativeName: countryResp.name.nativeName
            ? Object.values(countryResp.name.nativeName)[0].official
            : countryResp.name.common,
          population: countryResp.population,
          region: countryResp.region,
          subregion: countryResp.subregion,
          capital: countryResp.capital?.join(),
          domain: countryResp.tld?.join(),
          currencies: countryResp.currencies
            ? Object.values(countryResp.currencies)[0].name
            : undefined,
          languages: countryResp.languages
            ? Object.values(countryResp.languages).join()
            : undefined,
          "border-countries": countryResp.borders?.join(),
          img: countryResp.flags.svg,
        }))
        .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
      dispatch(addCountries(countries));
    }
  }, [data]);
};
