import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { search: "", buttonFilter: "All" },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setButtonFilter(state, action) {
      state.buttonFilter = action.payload;
    },
  },
});

export const { setSearch, setButtonFilter } = filterSlice.actions;
export default filterSlice;
