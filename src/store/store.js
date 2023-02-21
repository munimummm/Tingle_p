import { configureStore } from "@reduxjs/toolkit";
import audioSlice from "./AudioSlice";
import detailSlice from "./DetailSlice";
import listSlice from "./ListSlice";
import playListSlice from "./PlayListSlice";
import recommendSlice from "./RecommendSlice";
import searchSlice from "./SearchSlice";

export default configureStore({
  reducer: {
    search: searchSlice.reducer,
    list: listSlice.reducer,
    audio: audioSlice.reducer,
    recommend: recommendSlice.reducer,
    playList: playListSlice.reducer,
    detail: detailSlice.reducer,
  },
});
