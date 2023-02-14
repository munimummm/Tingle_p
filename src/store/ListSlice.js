import { createSlice } from "@reduxjs/toolkit";
let listSlice = createSlice({
  name: "list",
  initialState: {
    genre: "",
    list: [],
  },
  reducers: {
    setChartLists(state, action) {
      state.list = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
  },
});

export const { setChartLists, setGenre, setfocusTop100 } = listSlice.actions;
export default listSlice;
