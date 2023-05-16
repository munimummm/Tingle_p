import { createSlice } from "@reduxjs/toolkit";
let recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    genre: ["발라드", "락", "힙합", "댄스", "재즈", "클래식", "팝"],
    recommendList: [],
  },

  reducers: {
    setRecommendList(state, action) {
      state.recommendList = action.payload;
    },
  },
});

export const { setRecommendList } = recommendSlice.actions;
export default recommendSlice;
