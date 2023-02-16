import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  src: null,
  albumImage: `img/default_image.png`,
  title: null,
  artist: null,
  isPlaying: false,
  listSongs: [
    {
      _id: 22,
      artist: "Adele",
      title: "Hello",
      file_path: "Adele-Hello.mp3",
      cover_img: "25.jpeg",
    },
  ],
  currentIndex: 0,
  playerPlaying: {
    title: null,
    artist: null,
    cover_img: null,
    file_path: null,
    songs: [],
  },
};
const playNext = (state) => {
  if (state.playerPlaying.songs.length > 0) {
    const song = state.playerPlaying.songs.shift();
    state.listSongs.title = song.title;
    state.listSongs.file_path = song.file_path;
    state.listSongs.cover_img = song.cover_img;
    state.listSongs.artist = song.artist;
    state.isPlaying = true;
  } else {
    reset();
  }
};

const play = (state) => {
  if (state.listSongs.length > 0) {
    const song = state.listSongs.shift();
    state.listSongs[state.currentIndex].title = song.title;
    state.listSongs[state.currentIndex].file_path = song.file_path;
    state.listSongs[state.currentIndex].cover_img = song.cover_img;
    state.listSongs[state.currentIndex].artist = song.artist;
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
    setSong(state, action) {
      const { title, file_path, cover_img, artist } = action.payload;
      state.playerPlaying = {
        songs: [
          {
            title: title,
            artist: artist,
            file_path: process.env.PUBLIC_URL + `/mp3/${file_path}`,
            cover_img: process.env.PUBLIC_URL + `/img/${cover_img}`,
          },
        ],
      };
      playNext(state);
    },
    // setSong(state, action) {
    //   const { title, file_path, cover_img, artist, songs } = action.payload;
    //   state.listSongs = [
    //     {
    //       title: title,
    //       artist: artist,
    //       file_path: process.env.PUBLIC_URL + `/mp3/${file_path}`,
    //       cover_img: process.env.PUBLIC_URL + `/img/${cover_img}`,
    //       songs: [].push(songs),
    //     },
    //   ];
    //   playNext(state);
    // },
    setPlayerPlaying(state, action) {
      const { title, artist, albumImage, songs } = action.payload;
      state.playerPlaying = {
        title: title,
        artist: artist,
        albumImage: `/img/${albumImage}`,
        songs: [].concat(songs),
      };
      playNext(state);
    },
    setAddPlayList(state, action) {
      state.listSongs.push(action.payload);
    },
    setCurrentIndexm(state) {
      if (state.currentIndex === 0) {
        state.currentIndex = state.listSongs.length - 1;
      } else {
        state.currentIndex--;
      }
    },
    setCurrentIndexp(state) {
      if (state.currentIndex === state.listSongs.length - 1) {
        state.currentIndex = 0;
      } else {
        state.currentIndex++;
      }
    },
    setSongs(state, action) {
      const { title, file_path, cover_img, artist } = action.payload;
      state.listSongs[state.currentIndex] = {
        title: title,
        artist: artist,
        cover_img: cover_img,
        file_path: file_path,
      };
      play(state);
      console.log(state.currentIndex);
      // state.listSongs[state.currentIndex].artist = song.artist;
      // state.listSongs[state.currentIndex].cover_img = song.cover_img;
      // state.listSongs[state.currentIndex].file_path = song.file_path;
    },
    playNext: playNext,
  },
});

// export const { setSong, setPlayerPlaying, setAddPlayList } = AudioSlice.actions;
export const AudioActions = AudioSlice.actions;
export default AudioSlice;

// export const audioSelectors = {
//   defaultTitle: (state) => state.audio.title,
//   defaultUrl: (state) => state.audio.src,
//   defaultAlbumImg: (state) => state.audio.src,
//   defaultArtist: (state) => state.audio.artist,
// };
