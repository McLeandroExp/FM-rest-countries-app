import { ChangeEvent, useRef, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import {
  clearContinent,
  clearCountryArr,
  searchCountry,
  setContinent,
} from "../slices/countriesSlice";

export const SearchFilter = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const dispatch = useAppDispatch();
  let debounceRef = useRef<number>();
  const [filterText, setFilterText] = useState("All");
  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!event.target.value) return dispatch(clearCountryArr());
    debounceRef.current = setTimeout(() => {
      dispatch(searchCountry(event.target.value));
    }, 400);
  };
  return (
    <nav className="flex flex-col md:flex-row mt-6 gap-8 justify-between">
      <input
        className="bg-Dark-Blue p-4 py-2  rounded-md outline-none placeholder:text-White md:w-3/5"
        type="text"
        autoComplete="off"
        placeholder="Search for a country..."
        onChange={onQueryChanged}
      />
      <div className="w-52 h-12 bg-Very-Dark-Blue-A relative">
        <div className="h-12 bg-Dark-Blue rounded-md  flex justify-between items-center">
          <span className="px-4">{filterText}</span>
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
              setMenuVisible(false);
              setFilterText("All");
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer active:bg-Very-Dark-Blue-A"
          >
            All
          </li>
          <li
            onClick={() => {
              dispatch(setContinent("Africa"));
              setMenuVisible(false);
              setFilterText("Africa");
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer focus:bg-Very-Dark-Blue-A"
          >
            Africa
          </li>
          <li
            onClick={() => {
              dispatch(setContinent("Americas"));
              setMenuVisible(false);
              setFilterText("America");
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer focus:bg-Very-Dark-Blue-A"
          >
            America
          </li>
          <li
            onClick={() => {
              dispatch(setContinent("Asia"));
              setMenuVisible(false);
              setFilterText("Asia");
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer focus:bg-Very-Dark-Blue-A"
          >
            Asia
          </li>
          <li
            onClick={() => {
              dispatch(setContinent("Europe"));
              setMenuVisible(false);
              setFilterText("Europe");
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer focus:bg-Very-Dark-Blue-A"
          >
            Europe
          </li>
          <li
            onClick={() => {
              dispatch(setContinent("Oceania"));
              setMenuVisible(false);
              setFilterText("Oceania");
            }}
            className="hover:bg-Very-Dark-Blue-A cursor-pointer focus:bg-Very-Dark-Blue-A"
          >
            Oceania
          </li>
        </ul>
      </div>
    </nav>
  );
};
