import { createSlice } from "@reduxjs/toolkit";
let recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    list: [],
    genre: ["발라드", "락", "힙합", "댄스", "재즈", "클래식", "팝"],
  },
  reducers: {
    setRecommendList(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setRecommendList } = recommendSlice.actions;
export default recommendSlice;
