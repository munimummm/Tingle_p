import { createSlice } from "@reduxjs/toolkit";
let searchSlice = createSlice({
  name: "search",
  initialState: {
    limit: 5,
    titleOpen: false,
    artistOpen: false,
    albumOpen: false,
  },
  reducers: {
    setLimit(state, action) {
      state.limit = action.payload;
    },
    setTitleOpen(state, action) {
      state.titleOpen = action.payload;
    },
    setArtistOpen(state, action) {
      state.artistOpen = action.payload;
    },
    setAlbumOpen(state, action) {
      state.albumOpen = action.payload;
    },
  },
});

export const { setLimit, setTitleOpen, setArtistOpen, setAlbumOpen } =
  searchSlice.actions;
export default searchSlice;
