import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesState, country } from "../interfaces/countries";
import { Region } from "../interfaces/countriesResponse";

const initialState: CountriesState = {
  countries: [],
  countriesShowed: [],
  actualRegion: "All",
  nPage : 0
};

export const countriesState = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addCountries: (state, action: PayloadAction<country[]>) => {
      state.countries = action.payload;
    },
    setCountriesShowed: (state, action: PayloadAction<country[]>) => {
      state.countriesShowed = action.payload;
    },
    searchByRegion: (state, action: PayloadAction<string | Region>) => {
      if (action.payload === "All") {
        state.countriesShowed = state.countries;
      }
      else {
        state.countriesShowed = state.countries
          ?.filter((country) => country.region.includes(action.payload))
          .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
      }
      state.actualRegion = action.payload
    },
    searchByCountry: (
      state,
      action: PayloadAction<{ country: string; region: string }>
    ) => {
      if (action.payload.region === "All") {
        state.countriesShowed = state.countries
          ?.filter((country) =>
            country.name
              .toLocaleLowerCase()
              .includes(action.payload.country.trim().toLocaleLowerCase())
          )
          .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
      } else {
        state.countriesShowed = state.countries
          ?.filter(
            (country) =>
              country.name
                .toLocaleLowerCase()
                .includes(action.payload.country.trim().toLocaleLowerCase()) &&
              country.region.includes(action.payload.region)
          )
          .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
      }
    },
    changeRegion: (state, action: PayloadAction<string>) => {
      state.actualRegion = action.payload;
    },
    changePage : (state, action: PayloadAction<number>)=>{
      state.nPage = action.payload
    }
  },
});

export const {
  addCountries,
  setCountriesShowed,
  searchByRegion,
  searchByCountry,
  changeRegion,
  changePage
} = countriesState.actions;

export default countriesState.reducer;
