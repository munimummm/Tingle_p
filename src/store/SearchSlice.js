import { createSlice } from "@reduxjs/toolkit";
let searchSlice = createSlice({
  name: "search",
  initialState: { type: null },
  reducers: {
    searchDataChange(state, action) {
      state.type = action.payload;
    },
  },
});

export let { searchDataChange } = searchSlice.actions;
export default searchSlice;
