import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const initialState = {
  defaultState: [data],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterFullTime: (state, action) => {},
    searchFilter: (state, action) => {},
  },
});

export const { filterFullTime, searchFilter } = jobSlice.actions;
export default jobSlice.reducer;
