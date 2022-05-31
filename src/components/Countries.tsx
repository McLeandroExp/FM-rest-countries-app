import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { CountryElement } from "./CountryElement";
import { getCountries } from "../helpers/getCountries";
import { country } from "../interfaces/countries";

export const Countries = () => {
  const [nCountriesShowed, setNCountriesShowed] = useState(20);
  const { countries, continent, filteredCountries } = useAppSelector(
    (store) => store.countries
  );
  const [arr, setArr] = useState<country[] | undefined>(undefined);
  useEffect(() => {
    // setArr( continent?.length === 0 ? countries : continent)
    setArr(
      filteredCountries?.length === 0
        ? continent?.length === 0
          ? countries
          : continent
        : filteredCountries
    );

    setNCountriesShowed(continent?.length === 0 ? 20 : 999);
  }, [countries, continent, filteredCountries]);

  return (
    <div className="grid grid-cols-countries justify-center gap-12 mt-6">
      {arr?.map((country, i) => {
        if (i < nCountriesShowed) {
          return <CountryElement key={country.name} country={country} />;
        }
      })}
    </div>
  );
};
