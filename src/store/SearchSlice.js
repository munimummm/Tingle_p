import { createSlice } from "@reduxjs/toolkit";
let searchSlice = createSlice({
  name: "search",
  initialState: {
    type: null,
    searchTitleList: [],
    searchArtistList: [],
    searchAlbumList: [],
    limit: 5,
    titleOpen: false,
    artistOpen: false,
    albumOpen: false,
  },
  reducers: {
    searchTypeChange(state, action) {
      state.type = action.payload;
    },
    setTitleSearchList(state, action) {
      state.searchTitleList = action.payload;
    },
    setArtistSearchList(state, action) {
      state.searchArtistList = action.payload;
    },
    setAlbumSearchList(state, action) {
      state.searchAlbumList = action.payload;
    },
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

export const {
  searchTypeChange,
  setTitleSearchList,
  setArtistSearchList,
  setALbumSearchList,
  setLimit,
  setTitleOpen,
  setArtistOpen,
  setAlbumOpen,
} = searchSlice.actions;
export default searchSlice;
