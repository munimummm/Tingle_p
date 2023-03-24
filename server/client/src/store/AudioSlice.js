import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  file_path: null,
  cover_img: `img/default_image.png`,
  title: null,
  artist: null,
  isPlaying: false,
  listSongs: [
    // {
    //   file_path: null,
    //   cover_img: `img/default_image.png`,
    //   title: null,
    //   artist: null,
    // },
  ],
  currentIndex: 0,
};

const play = (state) => {
  if (state.listSongs.length > 0) {
    const song = state.listSongs[state.currentIndex];
    state.title = song.title;
    state.file_path = `/mp3/${song.file_path}`;
    state.cover_img = `/img/${song.cover_img}`;
    state.artist = song.artist;
    state.isPlaying = true;
  } else {
    reset();
  }
};
const reset = () => {
  return INITIAL_STATE;
};

const AudioSlice = createSlice({
  name: "audio",
  initialState: INITIAL_STATE,
  reducers: {
    setAddPlayList(state, action) {
      state.currentIndex = 0;
      state.listSongs.unshift(action.payload);
    },
    setCurrentIndexPrevious(state) {
      if (state.currentIndex === 0) {
        state.currentIndex = state.listSongs.length - 1;
      } else {
        state.currentIndex--;
      }
    },
    setCurrentIndexNext(state) {
      if (state.currentIndex === state.listSongs.length - 1) {
        state.currentIndex = 0;
      } else {
        state.currentIndex++;
      }
    },
    setSong(state, action) {
      const { songs } = action.payload;
      state.listSongs.concat(songs);
      play(state);
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const AudioActions = AudioSlice.actions;
export default AudioSlice;
