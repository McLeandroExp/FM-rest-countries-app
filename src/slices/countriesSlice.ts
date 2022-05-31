import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesState, country } from "../interfaces/countries";

const initialState: CountriesState = {
  countries: [],
  continent: [],
  filteredCountries: [],
};

export const countriesState = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addCountries: (state, action: PayloadAction<country[]>) => {
      state.countries = action.payload;
    },
    setContinent: (state, action: PayloadAction<string>) => {
      state.continent = state.countries
        ?.filter((country) => country.region.includes(action.payload))
        .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    },
    clearContinent: (state) => {
      state.continent = [];
    },
    searchCountry: (state, action: PayloadAction<string>) => {
      if (state.continent?.length === 0) {
        state.filteredCountries = state.countries
          ?.filter((country) =>
            country.name
              .toLocaleLowerCase()
              .includes(action.payload.trim().toLocaleLowerCase())
          )
          .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
      } else {
        state.filteredCountries = state.continent
          ?.filter((country) =>
            country.name
              .toLocaleLowerCase()
              .includes(action.payload.trim().toLocaleLowerCase())
          )
          .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
      }
    },
    clearCountryArr: (state) => {
      state.filteredCountries = [];
    },
  },
});

export const { addCountries, setContinent, clearContinent, searchCountry, clearCountryArr } =
  countriesState.actions;

export default countriesState.reducer;
