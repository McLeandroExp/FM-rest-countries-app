import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface searchState {
  search: string;
}

// Define the initial state using that type
const initialState: searchState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearchString: (state, action) => {
      state.search = action.payload;
    },
    clearSearchString: (state) => {
      state.search = "";
    },
  },
});

export const { setSearchString, clearSearchString } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectSearch = (state: RootState) => state.countriesApi

export default searchSlice.reducer;
