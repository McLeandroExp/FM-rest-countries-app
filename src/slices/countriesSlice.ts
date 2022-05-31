import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesState, country } from "../interfaces/countries";
import { Region } from "../interfaces/countriesResponse";

const initialState: CountriesState = {
  countries: [],
  continent: [],
  filteredCountries: [],
  showedCountries: [],
};

export const countriesState = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addCountries: (state, action: PayloadAction<country[]>) => {
      state.countries = action.payload;
    },
    setContinent: (state, action: PayloadAction<string | Region>) => {
      if (action.payload === "All") state.continent = state.countries;
      else {
        state.continent = state.countries
          ?.filter((country) => country.region.includes(action.payload))
          .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
      }
    },
    clearContinent: (state) => {
      state.continent = [];
    },
    searchCountry: (state, action: PayloadAction<string>) => {
      state.filteredCountries = state.continent
        ?.filter((country) =>
          country.name
            .toLocaleLowerCase()
            .includes(action.payload.trim().toLocaleLowerCase())
        )
        .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    },
    clearCountryArr: (state) => {
      state.filteredCountries = [];
    },
    setShowedCountries: (state, action: PayloadAction<country[]>) => {
      state.showedCountries = action.payload;
    },
  },
});

export const {
  addCountries,
  setContinent,
  clearContinent,
  searchCountry,
  clearCountryArr,
  setShowedCountries,
} = countriesState.actions;

export default countriesState.reducer;
