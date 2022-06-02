import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { changePage } from "../slices/countriesSlice";
import { CountryElement } from "./CountryElement";

export const Countries = () => {
  const { countriesShowed } = useAppSelector((store) => store.countries);
  const N_COUNTRIES_SHOWED = 20;
  const PAGS =
    countriesShowed && Math.ceil(countriesShowed.length / N_COUNTRIES_SHOWED);
  const { nPage } = useAppSelector((store) => store.countries);
  const dispatch = useAppDispatch()
  
  
  return (
    <div className="pb-20">
      <div className="grid grid-cols-countries justify-center gap-12 mt-6">
        {countriesShowed?.map((country, i) => {
          if (
            i >= N_COUNTRIES_SHOWED * nPage &&
            i < N_COUNTRIES_SHOWED * nPage + N_COUNTRIES_SHOWED
          ) {
            return <CountryElement key={country.name} country={country} />;
          }
        })}
      </div>
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          className="w-28 bg-White text-Very-Dark-Blue-B text-xl rounded-md shadow-md p-4  dark:bg-Dark-Blue dark:text-White"
          onClick={() => {
            if (nPage >= 1) {
              dispatch(changePage(nPage-1))
            }
          }}
        >
          Previous
        </button>
        <button
          className="w-28 bg-White text-Very-Dark-Blue-B text-xl rounded-md shadow-md p-4  dark:bg-Dark-Blue dark:text-White"
          onClick={() => {
            if (PAGS) {
              nPage < PAGS - 1 && dispatch(changePage(nPage+1))
              ;
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
