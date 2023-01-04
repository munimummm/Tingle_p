import { configureStore, createSlice } from "@reduxjs/toolkit";
let search = createSlice({
  name: "search",
  initialState: { name: "" },
  reducers: {
    searchDataChange(state, action) {
      state.name = action.payload;
    },
  },
});

export let { searchDataChange } = search.actions;
export default search;
