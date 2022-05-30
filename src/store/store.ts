import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "../api/countryApi";
import countries from "../slices/countriesSlice";
import search from "../slices/searchSlice";

export const store = configureStore({
  reducer: {
    countries,
    search,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
