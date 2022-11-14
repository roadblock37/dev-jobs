import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import data from "../data.json";
import Data from "../data";

const url = "../data.json";

const initialState = {
  defaultState: [Data],
  isLoading: true,
};

// export const getJobs = createAsyncThunk(
//   "jobs/getJobs",
//   async (name, thunkAPI) => {
//     try {
//       const resp = await axios(url);
//       return resp.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("something went wrong");
//     }
//   }
// );

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterFullTime: (state, action) => {},
    searchFilter: (state, action) => {},
  },
  //   extraReducers: {
  //     [getJobs.pending]: (state) => {
  //       state.isLoading = true;
  //     },
  //     [getJobs.fulfilled]: (state, action) => {
  //       console.log(action);
  //       state.isLoading = false;
  //       state.defaultState = action.payload;
  //     },
  //     [getJobs.rejected]: (state, action) => {
  //       console.log(action);
  //       state.isLoading = false;
  //     },
  //   },
});

export const { filterFullTime, searchFilter } = jobSlice.actions;
export default jobSlice.reducer;
