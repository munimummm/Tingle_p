import { createSlice } from "@reduxjs/toolkit";
let detailSlice = createSlice({
  name: "detail",
  initialState: {
    list: [],
  },
  reducers: {
    setDetailList(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setDetailList } = detailSlice.actions;
export default detailSlice;
