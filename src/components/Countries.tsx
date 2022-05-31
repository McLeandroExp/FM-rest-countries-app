import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { country } from "../interfaces/countries";
// import { setShowedCountries } from "../slices/countriesSlice";
import { CountryElement } from "./CountryElement";

export const Countries = () => {
  // const [sCountries, setsCountries] = useState<country[]| undefined>(undefined)
  const { countriesShowed } = useAppSelector((store) => store.countries);
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-countries justify-center gap-12 mt-6">
      {countriesShowed?.map((country) => {
        return <CountryElement key={country.name} country={country} />;
      })}
    </div>
  );
};
