import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: {
    value: [
      {
        common: "America",
      },
    ],
  },
  reducers: {
    setPotentialCountries: (state, action) => {
      state.value = action.payload;
    },
    deletePotentialCountries: (state) => {
      state.value = [];
    },
  },
});

// Export the destructured action creators
export const { setPotentialCountries, deletePotentialCountries } =
  potentialCountriesSlice.actions;

// Export a selector function
export const selectPotentials = (state) => state.potentialCountries.value;

// Export the reducer
export default potentialCountriesSlice.reducer;
