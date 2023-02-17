import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  file_path: null,
  cover_img: `img/default_image.png`,
  title: null,
  artist: null,
  isPlaying: false,
  listSongs: [
    // {
    //   _id: 22,
    //   artist: "Adele",
    //   title: "Hello",
    //   file_path: "Adele-Hello.mp3",
    //   cover_img: "25.jpeg",
    // },
  ],
  currentIndex: 0,
  playerPlaying: {
    songs: [],
  },
};

const play = (state) => {
  if (state.playerPlaying.songs.length > 0) {
    const song = state.playerPlaying.songs[state.currentIndex];
    state.title = song.title;
    state.file_path = process.env.PUBLIC_URL + `/mp3/${song.file_path}`;
    state.cover_img = process.env.PUBLIC_URL + `/img/${song.cover_img}`;
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
      state.playerPlaying = {
        songs: [].concat(songs),
      };
      play(state);
      console.log(state.currentIndex);
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const AudioActions = AudioSlice.actions;
export default AudioSlice;
