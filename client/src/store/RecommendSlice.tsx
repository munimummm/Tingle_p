import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface recommendState {
  genre: string[];
  recommendList: any[];
}

const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    genre: ["발라드", "락", "힙합", "댄스", "재즈", "클래식", "팝"],
    recommendList: [],
  },

  reducers: {
    setRecommendList(state: recommendState, action: PayloadAction<any[]>) {
      state.recommendList = action.payload;
    },
  },
});

export const { setRecommendList } = recommendSlice.actions;
export default recommendSlice;
