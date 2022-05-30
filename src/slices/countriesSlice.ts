import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesState, country } from "../interfaces/countries";

const initialState: CountriesState = {
  countries: [],
  continent: [],
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
  },
});

export const { addCountries, setContinent, clearContinent } =
  countriesState.actions;

export default countriesState.reducer;
