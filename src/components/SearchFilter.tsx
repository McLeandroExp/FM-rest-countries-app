import { ChangeEvent, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCountryQuery } from "../api/countryApi";
import { useAppDispatch } from "../hooks/redux";
import { clearContinent, setContinent } from "../slices/countriesSlice";

export const SearchFilter = () => {
  
  const [menuVisible, setMenuVisible] = useState(false);
  const dispatch = useAppDispatch();
  let debounceRef = useRef<number>();
  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      //   searchPlacesByTerm(event.target.value)
      // const { data, isSuccess } = useCountryQuery(event.target.value);
      // if (isSuccess) {
      //   console.log(JSON.stringify(data, undefined, 2));
      // }
    }, 400);
  };
  return (
    <nav className="flex flex-col md:flex-row mt-6 gap-8 justify-between">
      <input
        className="bg-Dark-Blue p-4 py-2  rounded-md outline-none placeholder:text-White md:w-3/5"
        type="search"
        autoComplete="off"
        placeholder="Search for a country..."
        onChange={onQueryChanged}
      />
      <div className="w-52 h-12 bg-Very-Dark-Blue-A relative">
        <div className="h-12 bg-Dark-Blue rounded-md  flex justify-between items-center">
          <span className="px-4"> Filter by Region</span>
          <span
            className="flex justify-center items-center w-12 h-12  cursor-pointer"
            onClick={() => setMenuVisible((visibility) => !visibility)}
          >
            <img className="w-4 h-4" src="./img/flecha-abajo.png" alt="arrow" />
          </span>
        </div>
        <ul
          className={`bg-Dark-Blue rounded-md p-3 absolute bottom-0 left-0 w-full translate-y-40 ${
            menuVisible ? "" : "invisible"
          }  transition-opacity `}
        >
          <li
            onClick={() => {
              dispatch(clearContinent());
              setMenuVisible(false)
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer"
          >
            All
          </li>
          <li
            onClick={() => {
              dispatch(setContinent("Africa"));
              setMenuVisible(false)
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer"

          >
            Africa
          </li>
          <li
            onClick={() => {
              dispatch(setContinent("Americas"));
              setMenuVisible(false)
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer"

          >
            America
          </li>
          <li
            onClick={() => {
              dispatch(setContinent("Asia"));
              setMenuVisible(false)
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer"

          >
            Asia
          </li>
          <li
            onClick={() => {
              dispatch(setContinent("Europe"));
              setMenuVisible(false)
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer"

          >
            Europe
          </li>
          <li
            onClick={() => {
              dispatch(setContinent("Oceania"));
              setMenuVisible(false)
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer"

          >
            Oceania
          </li>
        </ul>
      </div>
    </nav>
  );
};
