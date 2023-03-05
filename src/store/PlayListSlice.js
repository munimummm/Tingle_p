import { createSlice } from "@reduxjs/toolkit";
let playListSlice = createSlice({
  name: "playList",
  initialState: {
    list: [],
    playListOpen: false,
  },
  reducers: {
    setPlayLists(state, action) {
      state.list = action.payload;
    },
    setPlayListOpen(state, action) {
      state.playListOpen = action.payload;
    },
  },
});

export const { setPlayLists, setPlayListOpen } = playListSlice.actions;
export default playListSlice;
