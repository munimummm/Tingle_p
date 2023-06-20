import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AudioState {
  file_path: string | null;
  cover_img: string;
  title: string | null;
  artist: string | null;
  isPlaying: boolean;
  listSongs: Song[];
  currentIndex: number;
}

interface Song {
  file_path: string;
  cover_img: string;
  title: string;
  artist: string;
}

const INITIAL_STATE: AudioState = {
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

const reset = () => {
  return INITIAL_STATE;
};

const play = (state: AudioState) => {
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

const AudioSlice = createSlice({
  name: "audio",
  initialState: INITIAL_STATE,
  reducers: {
    setAddPlayList(state: AudioState, action: PayloadAction<Song>) {
      state.currentIndex = 0;
      state.listSongs.unshift(action.payload);
    },
    setCurrentIndexPrevious(state: AudioState) {
      if (state.currentIndex === 0) {
        state.currentIndex = state.listSongs.length - 1;
      } else {
        state.currentIndex--;
      }
    },
    setCurrentIndexNext(state: AudioState) {
      if (state.currentIndex === state.listSongs.length - 1) {
        state.currentIndex = 0;
      } else {
        state.currentIndex++;
      }
    },
    setSong(state: AudioState, action: PayloadAction<{ songs: Song }>) {
      const { songs } = action.payload;
      state.listSongs.concat(songs);
      play(state);
    },
    setIsPlaying: (state: AudioState, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
  },
});

export const AudioActions = AudioSlice.actions;
export default AudioSlice;
