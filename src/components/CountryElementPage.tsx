import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { country } from "../interfaces/countries";
import { Header } from "./Header";

export const CountryElementPage = () => {
  const [country, setCountry] = useState<country | undefined>(undefined);
  const [searchParams, setSearchParams] = useSearchParams();
  const countryName = searchParams.get("country");
  const { countries } = useAppSelector((store) => store.countries);
  const navigate = useNavigate();
  useEffect(() => {
    setCountry(countries?.find((country) => country.name === countryName));
  }, [countries]);

  return (
    <div className="bg-Very-Dark-Blue-A text-White min-h-screen font-nunito-sans">
      <Header />
      <main className="p-7 pb-11">
        <button
          className="w-28 flex justify-center items-stretch gap-3 p-2 bg-Dark-Blue rounded-sm drop-shadow-md"
          onClick={() => navigate(-1)}
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
        <article className="flex flex-col ml-auto mr-auto [width:90%] mt-12 text-Very-Light-Gray">
          <figure className="max-w-md">
            <img src={country?.img} alt={country?.img} />
          </figure>
          <section className="mt-8 text-left">
            <h3 className="text-2xl text-White">{country?.name}</h3>
            <div>
              <div className="flex flex-col gap-2 text-sm">
                <h4>Native name: <span className="text-Dark-Gray">{country?.nativeName}</span></h4>
                <h4>Population: <span className="text-Dark-Gray">{country?.population}</span></h4>
                <h4>Region: <span className="text-Dark-Gray">{country?.region}</span></h4>
                <h4>Sub Region: <span className="text-Dark-Gray">{country?.subregion}</span></h4>
                <h4>Capital: <span className="text-Dark-Gray">{country?.capital}</span></h4>
              </div>
              <div className="mt-6 flex flex-col gap-2 text-sm">
                <h4>Top Level Domain: <span className="text-Dark-Gray">{country?.domain}</span></h4>
                <h4>Languages: <span className="text-Dark-Gray">{country?.languages}</span></h4>
              </div>
            </div>
            <div className="mt-6 text-sm ">
              <h4 className="text-lg">Border Countries:</h4>
              <h4 className="text-Dark-Gray">{country?.["border-countries"]}</h4>
            </div>
          </section>
        </article>
      </main>
      {/* <button className="bg-Dark-Blue p-2 rounded-lg" onClick={()=>{
            setSearchParams({country:'Finlandia'})
        }}>changeParams</button> */}
    </div>
  );
};
