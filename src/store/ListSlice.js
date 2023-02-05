import { createSlice } from "@reduxjs/toolkit";
let listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },
  reducers: {
    setChartLists(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setChartLists } = listSlice.actions;
export default listSlice;
