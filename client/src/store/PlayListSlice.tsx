import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface playListState {
  list: any[];
  playListOpen: boolean;
}

const playListSlice = createSlice({
  name: "playList",
  initialState: {
    list: [],
    playListOpen: false,
  },
  reducers: {
    setPlayLists(state: playListState, action: PayloadAction<any[]>) {
      state.list = action.payload;
    },
    setPlayListOpen(state: playListState, action: PayloadAction<boolean>) {
      state.playListOpen = action.payload;
    },
  },
});

export const { setPlayLists, setPlayListOpen } = playListSlice.actions;
export default playListSlice;
