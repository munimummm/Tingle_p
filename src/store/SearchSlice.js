import { createSlice } from "@reduxjs/toolkit";
let searchSlice = createSlice({
  name: "search",
  initialState: { name: "" },
  reducers: {
    searchDataChange(state, action) {
      state.name = action.payload;
    },
  },
});

export let { searchDataChange } = searchSlice.actions;
export default searchSlice;
