import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface listState {
  genre: string;
  list: any[];
  loading: boolean;
}

const listSlice = createSlice({
  name: "list",
  initialState: {
    genre: "TOP50",
    list: [],
    loading: false,
  },
  reducers: {
    setChartLists(state: listState, action: PayloadAction<string[]>) {
      state.list = action.payload;
    },
    setGenre(state: listState, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
    setLoading(state: listState, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setChartLists, setGenre, setLoading } = listSlice.actions;
export default listSlice;
