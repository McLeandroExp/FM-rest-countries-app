import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { country } from "../interfaces/countries";
import { setShowedCountries } from "../slices/countriesSlice";
import { CountryElement } from "./CountryElement";

export const Countries = () => {
  // const [sCountries, setsCountries] = useState<country[]| undefined>(undefined)
  const { countries, continent, filteredCountries, showedCountries } =
    useAppSelector((store) => store.countries);
  const dispatch = useAppDispatch();
  useEffect(() => {
    countries && dispatch(setShowedCountries(countries));
  }, [countries]);
  useEffect(() => {
    continent && dispatch(setShowedCountries(continent));
    // setNCountriesShowed(999)
  }, [continent]);
  useEffect(() => {
    filteredCountries && dispatch(setShowedCountries(filteredCountries));
    // setNCountriesShowed(999)
  }, [filteredCountries]);
  useEffect(() => {
    showedCountries && dispatch(setShowedCountries(showedCountries));
  }, [showedCountries]);

  return (
    <div className="grid grid-cols-countries justify-center gap-12 mt-6">
      {showedCountries?.map((country) => {
        return <CountryElement key={country.name} country={country} />;
      })}
    </div>
  );
};
