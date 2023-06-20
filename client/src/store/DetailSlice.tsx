import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DetailState {
  list: any[];
}

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    list: [],
  },
  reducers: {
    setDetailList(state: DetailState, action: PayloadAction<any[]>) {
      state.list = action.payload;
    },
  },
});

export const { setDetailList } = detailSlice.actions;
export default detailSlice;
