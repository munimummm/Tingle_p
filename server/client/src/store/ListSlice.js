import { createSlice } from "@reduxjs/toolkit";
let listSlice = createSlice({
  name: "list",
  initialState: {
    genre: "TOP100",
    list: [],
    loading: false,
  },
  reducers: {
    setChartLists(state, action) {
      state.list = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setChartLists, setGenre, setfocusTop100, setLoading } =
  listSlice.actions;
export default listSlice;