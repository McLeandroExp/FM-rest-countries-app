import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { searchByCountry, searchByRegion } from "../slices/countriesSlice";

export const SearchFilter = () => {
  const { actualRegion } = useAppSelector(
    (store) => store.countries
  );
  const [menuVisible, setMenuVisible] = useState(false);
  const [regionName, setRegionName] = useState("All");
  const dispatch = useAppDispatch();
  const [countriesNames] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);
  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      dispatch(
        searchByCountry({ country: event.target.value, region: actualRegion })
      );
    } else {
      dispatch(searchByRegion(actualRegion));
    }
  };
  return (
    <nav className="flex flex-col md:flex-row mt-6 gap-8 justify-between">
      <input
        className="bg-White dark:bg-Dark-Blue p-4 py-2  rounded-md outline-none drop-shadow-md placeholder:text-Very-Dark-Blue-B dark:placeholder:text-White  lg:w-3/5"
        type="search"
        autoComplete="off"
        placeholder="Search for a country..."
        onChange={onQueryChanged}
      />
      <div className="w-76 h-12 bg-White dark:bg-Very-Dark-Blue-A relative drop-shadow-md rounded-md">
        <div className="h-12  dark:bg-Dark-Blue rounded-md  flex justify-between items-center">
          <span className="px-4">Filter by Region : {actualRegion}</span>
          <span
            className="flex justify-center items-center w-12 h-12  cursor-pointer"
            onClick={() => setMenuVisible((visibility) => !visibility)}
          >
            <img className="w-4 h-4" src="./img/flecha-abajo.png" alt="arrow" />
          </span>
        </div>
        <ul
          className={`bg-White dark:bg-Dark-Blue rounded-md p-3 absolute bottom-0 left-0 w-full translate-y-40 ${
            menuVisible ? "" : "invisible"
          }  transition-opacity`}
        >
          <li
            onClick={() => {
              setMenuVisible(false);
              setRegionName("All");
              dispatch(searchByRegion("All"));
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer active:bg-Very-Dark-Blue-A"
          >
            All
          </li>
          {countriesNames.map((countryName) => (
            <li
              key={countryName}
              onClick={() => {
                dispatch(searchByRegion(countryName));
                setMenuVisible(false);
                setRegionName(countryName);
              }}
              className="hover:bg-Very-Dark-Blue-A cursor-pointer active:bg-Very-Dark-Blue-A"
            >
              {countryName}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
