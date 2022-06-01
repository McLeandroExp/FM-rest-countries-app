import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { country } from "../interfaces/countries";
import { searchByRegion } from "../slices/countriesSlice";

export const CountryElementPage = () => {
  const [country, setCountry] = useState<country | undefined>(undefined);
  const [searchParams, setSearchParams] = useSearchParams();
  const countryName = searchParams.get("country");
  const { countries } = useAppSelector(
    (store) => store.countries
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setCountry(countries?.find((country) => country.name === countryName));
  }, [countries]);

  return (
    <div className="bg-Very-Light-Gray text-Very-Dark-Blue-B dark:bg-Very-Dark-Blue-A dark:text-White min-h-screen font-nunito-sans">
      <main className="p-7 pb-11">
        <button
          className="w-28 flex justify-center shadow-lg items-stretch gap-3 p-2 bg-White dark:bg-Dark-Blue rounded-sm drop-shadow-md"
          onClick={() => {
            navigate('../')
            country && dispatch(searchByRegion(country.region));
          }}
        >
          <span className="flex items-center">
            <img
              className="w-3 h-3"
              src="./img/flecha-izquierda.png"
              alt="left-arrow"
            />
          </span>
          <span>Back</span>
        </button>
        <article className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center gap-8 ml-auto mr-auto [width:90%] mt-12 text-Very-Light-Gray">
          <figure className="max-w-md">
            <img src={country?.img} alt={country?.img} />
          </figure>
          <section className="text-left text-Very-Dark-Blue-B dark:text-White flex flex-col gap-4">
            <h3 className="text-2xl ">{country?.name}</h3>
            <div className="flex flex-col gap-4 lg:flex-row justify-between">
              <div className="flex flex-col gap-2 text-sm">
                <h4>
                  Native name:{" "}
                  <span className="text-Dark-Gray">{country?.nativeName}</span>
                </h4>
                <h4>
                  Population:{" "}
                  <span className="text-Dark-Gray">{country?.population}</span>
                </h4>
                <h4>
                  Region:{" "}
                  <span className="text-Dark-Gray">{country?.region}</span>
                </h4>
                <h4>
                  Sub Region:{" "}
                  <span className="text-Dark-Gray">{country?.subregion}</span>
                </h4>
                <h4>
                  Capital:{" "}
                  <span className="text-Dark-Gray">{country?.capital}</span>
                </h4>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <h4>
                  Top Level Domain:{" "}
                  <span className="text-Dark-Gray">{country?.domain}</span>
                </h4>
                <h4>
                  Languages:{" "}
                  <span className="text-Dark-Gray">{country?.languages}</span>
                </h4>
              </div>
            </div>
            <div className="text-sm">
              <h4 className="text-lg">Border Countries:</h4>
              <h4 className="text-Dark-Gray">
                {country?.["border-countries"]}
              </h4>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};
