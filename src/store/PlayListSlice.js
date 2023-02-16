import { createSlice } from "@reduxjs/toolkit";
let playListSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },
  reducers: {
    setPlayLists(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setPlayLists } = playListSlice.actions;
export default playListSlice;
