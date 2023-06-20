import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface searchState {
  limit: number;
  titleOpen: boolean;
  artistOpen: boolean;
  albumOpen: boolean;
}

const searchSlice = createSlice({
  name: "search",
  initialState: {
    limit: 5,
    titleOpen: false,
    artistOpen: false,
    albumOpen: false,
  },
  reducers: {
    setLimit(state: searchState, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setTitleOpen(state: searchState, action: PayloadAction<boolean>) {
      state.titleOpen = action.payload;
    },
    setArtistOpen(state: searchState, action: PayloadAction<boolean>) {
      state.artistOpen = action.payload;
    },
    setAlbumOpen(state: searchState, action: PayloadAction<boolean>) {
      state.albumOpen = action.payload;
    },
  },
});

export const { setLimit, setTitleOpen, setArtistOpen, setAlbumOpen } =
  searchSlice.actions;
export default searchSlice;
