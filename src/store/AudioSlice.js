import { createSlice } from "@reduxjs/toolkit";

const playNext = (state) => {
  state.title = state.playerPlaying.title;
  state.src = state.playerPlaying.src;
  state.albumImage = state.playerPlaying.albumImage;
  state.artist = state.playerPlaying.artist;
};

let AudioSlice = createSlice({
  name: "audio",
  initialState: {
    src: null,
    albumImage: `img/default_image.png`,
    title: null,
    artist: null,

    playerPlaying: {
      src: null,
      albumImage: `img/default_image.png`,
      title: null,
      artist: null,
    },
  },
  reducers: {
    setUrl(state, action) {
      const { title, src, albumImage, artist } = action.payload;
      state.playerPlaying = {
        src: src,
        albumImage: albumImage,
        title: title,
        artist: artist,
      };
      playNext(state);
    },
  },
});

export const { setUrl } = AudioSlice.actions;
export default AudioSlice;
// export const audioSelectors = {
//   defaultTitle: (state) => state.audio.title,
//   defaultUrl: (state) => state.audio.src,
//   defaultAlbumImg: (state) => state.audio.src,
//   defaultArtist: (state) => state.audio.artist,
// };
