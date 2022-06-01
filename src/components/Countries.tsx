import { useAppSelector } from "../hooks/redux";
import { CountryElement } from "./CountryElement";

export const Countries = () => {
  const { countriesShowed } = useAppSelector((store) => store.countries);

  return (
    <div className="grid grid-cols-countries justify-center gap-12 mt-6">
      {countriesShowed?.map((country) => {
        return <CountryElement key={country.name} country={country} />;
      })}
    </div>
  );
};
